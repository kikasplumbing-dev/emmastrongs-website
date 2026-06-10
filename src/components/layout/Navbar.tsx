import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { NAV } from "@/data/site";
import { Logo } from "@/components/Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-20">
        <Link to="/" className="flex items-center">
          <Logo variant={scrolled ? "dark" : "light"} size="md" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                scrolled ? "text-foreground" : "text-white"
              } hover:text-gold`}
              activeProps={{ className: "text-gold [&>span]:scale-x-100" }}
              activeOptions={{ exact: true }}
            >
              {item.label}
              <span className="pointer-events-none absolute left-4 right-4 -bottom-0.5 h-0.5 bg-gold origin-center scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="bg-gradient-gold text-navy font-semibold px-6 py-3 rounded-full text-sm shadow-gold hover:shadow-luxury transition-all hover:-translate-y-0.5"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
