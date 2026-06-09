import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/layout/PageHero";
import { SectionTitle } from "@/components/ui-custom/SectionTitle";
import { StatsBar } from "@/components/sections/HomeSections";
import hero from "@/assets/hero-1.jpg";
import { Eye, Target, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Emmastrons — Our Story, Mission & Values" },
      { name: "description", content: "Learn about Emmastrons — Nigeria's premium interior & exterior decoration studio. Our story, mission, vision, and the values driving our craft." },
      { property: "og:title", content: "About Emmastrons" },
      { property: "og:description", content: "A studio built on craft, taste, and trust." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Target, title: "Our Mission", text: "To transform every space we touch into a refined expression of our client's vision — through craftsmanship, creativity, and uncompromising standards." },
  { icon: Eye, title: "Our Vision", text: "To become Africa's most trusted name in luxury interior and exterior design — known for elegance, innovation, and enduring quality." },
  { icon: Heart, title: "Our Values", text: "Integrity in every transaction. Excellence in every detail. Respect for every client. A culture of continuous craft and learning." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A studio built on craft, taste, and trust."
        subtitle="For over a decade, Emmastrons has shaped homes, offices, and hotels across Nigeria — pairing classical elegance with contemporary discipline."
        image={hero}
      />

      <section className="py-24 container-px mx-auto max-w-5xl">
        <SectionTitle eyebrow="Our story" title="Where vision meets craftsmanship." />
        <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
          <p>
            Emmastrons was founded on a simple conviction: that every space — no matter its size or
            budget — deserves to be designed with intention. What began as a small decoration studio
            has grown into one of Nigeria's most trusted names in interior and exterior design.
          </p>
          <p>
            Today, our team of designers, project managers, and master craftsmen collaborate on
            residences, offices, hospitality projects, and commercial spaces — bringing together
            classical proportion, contemporary materiality, and locally-sourced craft.
          </p>
          <p>
            We believe great design is invisible at first — and unforgettable forever. Every project
            is a conversation, a collaboration, and a commitment.
          </p>
        </div>
      </section>

      <StatsBar />

      <section className="py-24 container-px mx-auto max-w-7xl">
        <SectionTitle
          center
          eyebrow="What guides us"
          title="Mission, vision, and the values we live by."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.article
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.55 }}
                className="bg-card border border-border rounded-2xl p-10 hover:border-gold hover:shadow-luxury transition-all"
              >
                <div className="h-14 w-14 rounded-full bg-gradient-gold grid place-items-center text-navy">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 text-2xl font-display font-bold text-navy">{v.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{v.text}</p>
              </motion.article>
            );
          })}
        </div>
      </section>
    </>
  );
}
