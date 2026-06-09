import { createFileRoute } from "@tanstack/react-router";
import { HomeHero } from "@/components/sections/HomeHero";
import {
  AboutTeaser, StatsBar, ServicesGrid, WhyUsSection, TestimonialsCarousel, CTASection,
} from "@/components/sections/HomeSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Emmastrons — Transforming Spaces Into Stunning Masterpieces" },
      { name: "description", content: "Premium interior & exterior decoration services in Nigeria. Elegance, beauty, and functionality for every space." },
      { property: "og:title", content: "Emmastrons — Premium Interior & Exterior Decorations" },
      { property: "og:description", content: "Transforming spaces into stunning masterpieces across Nigeria." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <HomeHero />
      <AboutTeaser />
      <StatsBar />
      <ServicesGrid />
      <WhyUsSection />
      <TestimonialsCarousel />
      <CTASection />
    </>
  );
}
