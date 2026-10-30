import { LucideIcon, Sparkles } from "lucide-react";

type SectionBadgeProps = {
  label: string;
  icon?: LucideIcon;
  aos?: string;
  aosDelay?: string | number;
};

export default function SectionBadge({
  label,
  icon: Icon = Sparkles,
  aos = "fade-up",
  aosDelay,
}: SectionBadgeProps) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-3 shadow-[0_0_20px_rgba(197,255,65,0.12)]"
      data-aos={aos}
      data-aos-delay={aosDelay}
    >
      <Icon className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        {label}
      </span>
    </div>
  );
}
