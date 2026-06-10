import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  { img: hero1, alt: "Luxury living room interior" },
  { img: hero2, alt: "Premium home exterior at dusk" },
  { img: hero3, alt: "Elegant master bedroom" },
];

export function HomeHero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.img
          key={i}
          src={slides[i].img}
          alt={slides[i].alt}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-br from-navy-deep/85 via-navy-deep/65 to-navy/40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_color-mix(in_oklab,_var(--gold)_20%,_transparent)_0%,_transparent_60%)]" />

      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[8%] w-32 h-32 border border-gold/30 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-[6%] w-20 h-20 border-2 border-gold/40 rotate-45 hidden lg:block"
      />

      <div className="relative h-full container-px mx-auto max-w-7xl flex items-center">
        <div className="max-w-3xl text-white pt-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gold tracking-[0.35em] uppercase text-sm font-semibold mb-6"
          >
            ⸺ Premium Interior & Exterior Decor
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.05] text-balance"
          >
            Transforming Spaces Into{" "}
            <span className="text-gradient-gold italic">Stunning</span> Masterpieces
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-8 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed"
          >
            Professional interior & exterior decoration services designed to bring elegance,
            beauty, and functionality to every space.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="group bg-gradient-gold text-navy font-semibold px-8 py-4 rounded-full shadow-gold hover:shadow-luxury transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              Get Free Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="group border-2 border-white/30 backdrop-blur-sm bg-white/5 text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-navy transition-all inline-flex items-center gap-2"
            >
              <Play size={16} className="fill-current" />
              View Projects
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            className={`h-1 rounded-full transition-all ${
              idx === i ? "bg-gold w-12" : "bg-white/40 w-6"
            }`}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
