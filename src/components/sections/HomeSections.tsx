import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SectionTitle } from "@/components/ui-custom/SectionTitle";
import { SERVICES, WHY_US, STATS, TESTIMONIALS, PORTFOLIO } from "@/data/site";

export function AboutTeaser() {
  return (
    <section className="py-24 container-px mx-auto max-w-7xl">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src={PORTFOLIO[0].image}
            alt="Interior design"
            className="rounded-2xl shadow-luxury w-full aspect-[4/5] object-cover"
            loading="lazy"
          />
          <div className="absolute -bottom-8 -right-8 bg-gradient-gold text-navy p-8 rounded-2xl shadow-gold hidden md:block">
            <p className="text-5xl font-display font-bold">12+</p>
            <p className="text-sm uppercase tracking-wider font-semibold">Years of Craft</p>
          </div>
        </motion.div>

        <div>
          <SectionTitle
            eyebrow="About Emmastrons"
            title="A studio built on craft, taste, and trust."
            subtitle="For over a decade, Emmastrons has shaped homes, offices, hotels, and public spaces across Nigeria — pairing classical elegance with contemporary discipline."
          />
          <ul className="space-y-4 mb-8">
            {[
              "Award-winning design philosophy",
              "End-to-end project management",
              "Premium materials & expert craftsmen",
              "Transparent pricing, on-time delivery",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={20} />
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-navy font-semibold border-b-2 border-gold pb-1 hover:gap-3 transition-all"
          >
            Learn more about us <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function StatsBar() {
  return (
    <section className="bg-navy-deep text-white py-16">
      <div className="container-px mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="text-center"
          >
            <p className="text-4xl md:text-6xl font-display font-bold text-gradient-gold">{s.value}</p>
            <p className="mt-2 text-sm md:text-base text-white/70 uppercase tracking-wider">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function ServicesGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="py-24 container-px mx-auto max-w-7xl">
      {heading && (
        <SectionTitle
          center
          eyebrow="What we do"
          title="Comprehensive design & decoration services"
          subtitle="From a single room refresh to a full architectural transformation — every service delivered with the same uncompromising standard."
        />
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-gold hover:shadow-luxury transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-gold opacity-0 group-hover:opacity-10 blur-3xl transition-opacity" />
              <div className="h-14 w-14 rounded-xl bg-navy-deep grid place-items-center text-gold group-hover:bg-gradient-gold group-hover:text-navy transition-all duration-500">
                <Icon size={26} />
              </div>
              <h3 className="mt-6 text-xl font-display font-bold text-navy">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              <ul className="mt-5 space-y-2">
                {s.items.slice(0, 3).map((it) => (
                  <li key={it} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gold" /> {it}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:text-gold-deep transition-colors"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export function WhyUsSection() {
  return (
    <section className="bg-secondary py-24">
      <div className="container-px mx-auto max-w-7xl">
        <SectionTitle
          center
          eyebrow="Why choose us"
          title="The Emmastrons difference"
          subtitle="Six commitments that have made us the trusted partner for hundreds of clients."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((w, i) => {
            const Icon = w.icon;
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="bg-card p-8 rounded-2xl border border-border hover:border-gold transition-all group"
              >
                <div className="h-12 w-12 rounded-full bg-gold/10 grid place-items-center text-gold-deep group-hover:bg-gradient-gold group-hover:text-navy transition-all">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-lg font-display font-bold text-navy">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsCarousel() {
  return (
    <section className="bg-gradient-hero text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_color-mix(in_oklab,_var(--gold)_15%,_transparent)_0%,_transparent_70%)]" />
      <div className="container-px mx-auto max-w-7xl relative">
        <SectionTitle
          center
          light
          eyebrow="Client Stories"
          title="Loved by homeowners and businesses alike"
        />
        <TestimonialsAutoplay />
      </div>
    </section>
  );
}

function TestimonialsAutoplay() {
  const autoplay = useRef(Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true }));
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay.current]);

  return (
    <div className="mt-4 overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.name}
            className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-6 first:pl-0"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-gold/50 transition-all h-full">
              <div className="flex text-gold mb-4">
                {Array.from({ length: t.rating }).map((_, k) => <span key={k}>★</span>)}
              </div>
              <blockquote className="text-white/85 leading-relaxed italic">"{t.text}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-4 pt-6 border-t border-white/10">
                <img src={t.image} alt={t.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-white/60">{t.role}</p>
                </div>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}



export function CTASection() {
  return (
    <section className="py-24 container-px mx-auto max-w-7xl">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-12 md:p-20 text-center text-white shadow-luxury">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-gold/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        <div className="relative">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4">Ready to begin?</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-balance max-w-3xl mx-auto">
            Let's bring your dream space to life.
          </h2>
          <p className="mt-5 text-white/75 max-w-xl mx-auto">
            Book a free consultation today. Our designers will visit, listen, and craft a proposal tailored to you.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 bg-gradient-gold text-navy font-semibold px-8 py-4 rounded-full shadow-gold hover:-translate-y-0.5 transition-all"
          >
            Get a Free Quote <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
