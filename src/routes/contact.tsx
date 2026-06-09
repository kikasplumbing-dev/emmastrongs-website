import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { PageHero } from "@/components/layout/PageHero";
import { CONTACT } from "@/data/site";
import hero from "@/assets/portfolio-2.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Emmastrons — Get a Free Consultation" },
      { name: "description", content: `Get in touch with Emmastrons. Call ${CONTACT.phone1} or email ${CONTACT.email} for a free design consultation.` },
      { property: "og:title", content: "Contact Emmastrons" },
      { property: "og:description", content: "Book a free interior or exterior design consultation today." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

type FormValues = {
  name: string; phone: string; email: string; service: string; message: string;
};

function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>();
  const [sent, setSent] = useState(false);

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Quote request:", data);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's design something extraordinary."
        subtitle="Tell us about your project. We'll get back to you within one business day."
        image={hero}
      />

      <section className="py-24 container-px mx-auto max-w-7xl grid lg:grid-cols-5 gap-12">
        {/* Info column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-6"
        >
          <div className="bg-gradient-hero text-white rounded-2xl p-8 shadow-luxury">
            <h3 className="font-display text-2xl font-bold mb-2">Get in touch</h3>
            <p className="text-white/70 text-sm mb-8">Reach out via phone, email, or WhatsApp. We're here to help.</p>

            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="h-11 w-11 rounded-full bg-gold/15 grid place-items-center text-gold shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">Phone</p>
                  <a href={`tel:${CONTACT.phone1}`} className="block hover:text-gold">{CONTACT.phone1}</a>
                  <a href={`tel:${CONTACT.phone2}`} className="block hover:text-gold">{CONTACT.phone2}</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-11 w-11 rounded-full bg-gold/15 grid place-items-center text-gold shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">Email</p>
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-gold break-all">{CONTACT.email}</a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-11 w-11 rounded-full bg-gold/15 grid place-items-center text-gold shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">Office</p>
                  <p>{CONTACT.address}</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-11 w-11 rounded-full bg-gold/15 grid place-items-center text-gold shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-white/60">Hours</p>
                  <p>{CONTACT.hours}</p>
                </div>
              </li>
            </ul>

            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank" rel="noreferrer"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-gradient-gold text-navy font-semibold py-3.5 rounded-full hover:-translate-y-0.5 transition-all shadow-gold"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>

          {/* Map placeholder */}
          <div className="rounded-2xl overflow-hidden border border-border h-64 bg-secondary relative">
            <iframe
              title="Office location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=7.45%2C9.05%2C7.55%2C9.10&layer=mapnik"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Form column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 bg-card border border-border rounded-2xl p-8 md:p-10 shadow-luxury"
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-semibold">Send us a message</p>
          <h2 className="text-3xl font-display font-bold text-navy mt-2 mb-8">Request a free quote</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5">
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Full Name" error={errors.name?.message}>
                <input
                  {...register("name", { required: "Name is required" })}
                  className={inputCls}
                  placeholder="Your name"
                />
              </Field>
              <Field label="Phone" error={errors.phone?.message}>
                <input
                  {...register("phone", { required: "Phone is required" })}
                  className={inputCls}
                  placeholder="+234..."
                />
              </Field>
            </div>
            <Field label="Email" error={errors.email?.message}>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /\S+@\S+\.\S+/, message: "Invalid email" },
                })}
                className={inputCls}
                placeholder="you@example.com"
              />
            </Field>
            <Field label="Service Needed" error={errors.service?.message}>
              <select {...register("service", { required: "Select a service" })} className={inputCls}>
                <option value="">— Select a service —</option>
                <option>Interior Decoration</option>
                <option>Exterior Decoration</option>
                <option>Renovation</option>
                <option>Consultation</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Message" error={errors.message?.message}>
              <textarea
                {...register("message", { required: "Message is required", minLength: { value: 10, message: "Please add a bit more detail" } })}
                rows={5}
                className={inputCls}
                placeholder="Tell us about your project, space, and goals."
              />
            </Field>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-gold text-navy font-semibold px-8 py-4 rounded-full shadow-gold hover:-translate-y-0.5 transition-all inline-flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : <>Send Message <Send size={16} /></>}
            </button>

            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green-700 bg-green-50 border border-green-200 rounded-lg p-3"
              >
                ✓ Thank you — we'll be in touch within one business day.
              </motion.p>
            )}
          </form>
        </motion.div>
      </section>
    </>
  );
}

const inputCls =
  "w-full px-4 py-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-gold focus:border-gold transition-all text-foreground";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold text-navy mb-2">{label}</span>
      {children}
      {error && <span className="block text-xs text-destructive mt-1">{error}</span>}
    </label>
  );
}
