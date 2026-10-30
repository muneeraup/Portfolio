"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type CursorStyle = "line" | "block" | "underscore";

type TypingAnimationProps = {
  children?: string;
  words?: string[];
  className?: string;
  duration?: number;
  typeSpeed?: number;
  deleteSpeed?: number;
  delay?: number;
  pauseDelay?: number;
  loop?: boolean;
  startOnView?: boolean;
  showCursor?: boolean;
  blinkCursor?: boolean;
  cursorStyle?: CursorStyle;
};

function getCursorChar(style: CursorStyle) {
  switch (style) {
    case "block":
      return "▌";
    case "underscore":
      return "_";
    default:
      return "|";
  }
}

export default function TypingAnimation({
  children,
  words,
  className = "",
  duration = 100,
  typeSpeed,
  deleteSpeed,
  delay = 0,
  pauseDelay = 1000,
  loop = false,
  startOnView = true,
  showCursor = true,
  blinkCursor = true,
  cursorStyle = "line",
}: TypingAnimationProps) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");
  const [inView, setInView] = useState(!startOnView);
  const ref = useRef<HTMLSpanElement>(null);

  const phrases = useMemo(
    () => words ?? (children ? [children] : []),
    [words, children],
  );
  const phraseKey = useMemo(
    () => (words ? words.join("\0") : (children ?? "")),
    [words, children],
  );

  const hasMultiple = phrases.length > 1;
  const typingMs = typeSpeed ?? duration;
  const deletingMs = deleteSpeed ?? typingMs / 2;
  const active = !startOnView || inView;

  useEffect(() => {
    if (!startOnView) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [startOnView]);

  useEffect(() => {
    setDisplayed("");
    setWordIndex(0);
    setCharIndex(0);
    setPhase("typing");
  }, [phraseKey]);

  useEffect(() => {
    if (!active || phrases.length === 0) return;

    const current = Array.from(phrases[wordIndex] || "");
    const timeout = window.setTimeout(
      () => {
        switch (phase) {
          case "typing":
            if (charIndex < current.length) {
              setDisplayed(current.slice(0, charIndex + 1).join(""));
              setCharIndex(charIndex + 1);
            } else if ((hasMultiple || loop) && (wordIndex !== phrases.length - 1 || loop)) {
              setPhase("pause");
            }
            break;
          case "pause":
            setPhase("deleting");
            break;
          case "deleting":
            if (charIndex > 0) {
              setDisplayed(current.slice(0, charIndex - 1).join(""));
              setCharIndex(charIndex - 1);
            } else {
              setWordIndex((wordIndex + 1) % phrases.length);
              setPhase("typing");
            }
            break;
        }
      },
      delay > 0 && displayed === ""
        ? delay
        : phase === "typing"
          ? typingMs
          : phase === "deleting"
            ? deletingMs
            : pauseDelay,
    );

    return () => window.clearTimeout(timeout);
  }, [
    active,
    phase,
    charIndex,
    wordIndex,
    displayed,
    phrases,
    hasMultiple,
    loop,
    typingMs,
    deletingMs,
    pauseDelay,
    delay,
  ]);

  const currentChars = Array.from(phrases[wordIndex] || "");
  const finished =
    !loop &&
    wordIndex === phrases.length - 1 &&
    charIndex >= currentChars.length &&
    phase !== "deleting";
  const cursorVisible =
    showCursor && !finished && (hasMultiple || loop || charIndex < currentChars.length);

  return (
    <span
      ref={ref}
      className={`leading-[1.25] tracking-[-0.02em] inline-block ${className}`.trim()}
    >
      {displayed}
      {cursorVisible ? (
        <span className={`inline-block ${blinkCursor ? "animate-blink-cursor" : ""}`}>
          {getCursorChar(cursorStyle)}
        </span>
      ) : null}
    </span>
  );
}
