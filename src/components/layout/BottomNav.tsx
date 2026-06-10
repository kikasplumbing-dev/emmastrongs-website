import { Link } from "@tanstack/react-router";
import { NAV } from "@/data/site";

export function BottomNav() {
  return (
    <nav
      className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-background/95 backdrop-blur-md border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-label="Mobile navigation"
    >
      <ul className="flex items-center justify-around h-16">
        {NAV.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.to} className="flex-1">
              <Link
                to={item.to}
                activeProps={{ className: "text-gold [&>span.indicator]:scale-x-100" }}
                activeOptions={{ exact: true }}
                className="relative flex flex-col items-center justify-center gap-1 py-2 text-[11px] font-medium text-muted-foreground hover:text-gold transition-colors"
              >
                <Icon size={20} />
                <span>{item.label}</span>
                <span className="indicator absolute top-0 left-1/2 -translate-x-1/2 h-0.5 w-8 bg-gold rounded-full origin-center scale-x-0 transition-transform duration-300" />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
