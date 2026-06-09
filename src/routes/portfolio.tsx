import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { PORTFOLIO } from "@/data/site";
import hero from "@/assets/portfolio-5.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Recent Interior & Exterior Projects | Emmastrons" },
      { name: "description", content: "Browse our curated portfolio of luxury interiors, exteriors, residential and commercial projects." },
      { property: "og:title", content: "Portfolio — Emmastrons" },
      { property: "og:description", content: "A showcase of our recent design and decoration projects." },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: Portfolio,
});

const CATEGORIES = ["All", "Interior", "Exterior", "Commercial", "Residential"] as const;

function Portfolio() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const items = PORTFOLIO.filter(
    (p) => cat === "All" || p.category === cat || p.tag === cat,
  );

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Where craft becomes character."
        subtitle="A curated selection of our recent interior and exterior projects across Nigeria."
        image={hero}
      />

      <section className="py-20 container-px mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                cat === c
                  ? "bg-gradient-gold text-navy shadow-gold"
                  : "border border-border text-muted-foreground hover:border-gold hover:text-navy"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {items.map((p, i) => (
              <motion.figure
                key={p.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                onClick={() => setLightbox(p.image)}
                className="group relative break-inside-avoid cursor-pointer overflow-hidden rounded-2xl bg-card"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <figcaption className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-gold text-xs tracking-[0.25em] uppercase font-semibold">{p.category}</p>
                  <h3 className="text-white text-xl font-display font-bold mt-1">{p.title}</h3>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] bg-navy-deep/95 backdrop-blur-sm grid place-items-center p-6 cursor-zoom-out"
          >
            <button
              className="absolute top-6 right-6 h-12 w-12 grid place-items-center rounded-full bg-white/10 text-white hover:bg-gold hover:text-navy"
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={lightbox}
              alt=""
              className="max-h-[90vh] max-w-[92vw] rounded-2xl shadow-luxury object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
