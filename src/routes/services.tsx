import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/PageHero";
import { ServicesGrid, WhyUsSection, CTASection } from "@/components/sections/HomeSections";
import hero from "@/assets/hero-3.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Interior, Exterior, Renovation & Consultation | Emmastrons" },
      { name: "description", content: "Explore Emmastrons' full range of services: interior decoration, exterior design, renovation, and expert consultation." },
      { property: "og:title", content: "Our Services — Emmastrons" },
      { property: "og:description", content: "Comprehensive interior and exterior decoration services across Nigeria." },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Services"
        title="Comprehensive design & decoration."
        subtitle="From a single room refresh to full architectural transformations — delivered to one standard: exceptional."
        image={hero}
      />
      <ServicesGrid heading={false} />
      <WhyUsSection />
      <CTASection />
    </>
  ),
});
