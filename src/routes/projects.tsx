import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { PROJECTS } from "@/data/site";
import { CTASection } from "@/components/sections/HomeSections";
import hero from "@/assets/portfolio-3.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Featured Projects — Emmastrons" },
      { name: "description", content: "A closer look at signature projects delivered by Emmastrons across residential and commercial spaces." },
      { property: "og:title", content: "Featured Projects — Emmastrons" },
      { property: "og:description", content: "Signature interior and exterior projects." },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Signature projects, delivered."
        subtitle="A closer look at recent work across residences, hospitality, and commercial spaces."
        image={hero}
      />

      <section className="py-24 container-px mx-auto max-w-7xl space-y-24">
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="relative">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="rounded-2xl shadow-luxury w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-gold text-navy px-6 py-3 rounded-full font-display font-bold shadow-gold">
                Project {String(i + 1).padStart(2, "0")}
              </div>
            </div>
            <div>
              <p className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-3">Case Study</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-navy text-balance">{p.title}</h2>
              <p className="mt-4 flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} className="text-gold" /> {p.location}
              </p>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">{p.description}</p>
              <div className="mt-8">
                <p className="text-sm font-semibold text-navy mb-3">Services Provided</p>
                <div className="flex flex-wrap gap-2">
                  {p.services.map((s) => (
                    <span key={s} className="bg-secondary border border-border px-4 py-1.5 rounded-full text-sm text-navy">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </section>

      <CTASection />
    </>
  );
}
