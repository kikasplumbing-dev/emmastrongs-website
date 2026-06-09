import logoIcon from "@/assets/logo-icon.png";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  iconOnly?: boolean;
}

export function Logo({ variant = "dark", size = "md", iconOnly = false }: LogoProps) {
  const sizes = {
    sm: { icon: "h-7 w-7", title: "text-lg", sub: "text-[9px]" },
    md: { icon: "h-10 w-10", title: "text-2xl", sub: "text-[10px]" },
    lg: { icon: "h-14 w-14", title: "text-4xl", sub: "text-xs" },
  }[size];

  const titleColor = variant === "light" ? "text-white" : "text-navy";
  const subColor = variant === "light" ? "text-white/80" : "text-muted-foreground";

  return (
    <div className="flex items-center gap-3">
      <img
        src={logoIcon}
        alt="Emmastrons"
        className={`${sizes.icon} object-contain`}
        width={56}
        height={56}
      />
      {!iconOnly && (
        <div className="flex flex-col leading-none">
          <span className={`font-display font-bold tracking-wide ${sizes.title} ${titleColor}`}>
            EMMA<span className="text-gradient-gold">STRONS</span>
          </span>
          <span className={`tracking-[0.2em] uppercase font-medium ${sizes.sub} ${subColor}`}>
            Interiors & Exteriors
          </span>
        </div>
      )}
    </div>
  );
}
