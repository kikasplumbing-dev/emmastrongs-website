import {
  Sofa, Building2, Hammer, Lightbulb, Trees, ClipboardList,
  Award, Users, Sparkles, Clock, Palette, HeartHandshake,
  Home, Info, Briefcase, Image as ImageIcon, Mail as MailIcon,
} from "lucide-react";

export const CONTACT = {
  phone1: "07042054107",
  phone2: "0933290425",
  email: "emmastrons@gmail.com",
  whatsapp: "2347042054107",
  address: "Lagos, Nigeria — available nationwide & worldwide",
  hours: "Mon – Sat: 8:00 AM – 6:00 PM",
};

export const NAV = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/services", label: "Services", icon: Briefcase },
  { to: "/portfolio", label: "Portfolio", icon: ImageIcon },
  { to: "/contact", label: "Contact", icon: MailIcon },
] as const;

export const SERVICES = [
  {
    icon: Sofa,
    title: "Interior Decoration",
    description: "Living rooms, bedrooms, offices — refined spaces designed around how you live.",
    items: ["Living Room Design", "Bedroom Design", "Office Decoration", "Ceiling Designs", "Lighting Design"],
  },
  {
    icon: Building2,
    title: "Exterior Decoration",
    description: "Striking facades and beautifully finished exteriors that make a statement.",
    items: ["Building Facade Design", "Exterior Finishing", "Landscape Enhancement", "Outdoor Beautification"],
  },
  {
    icon: Hammer,
    title: "Renovation",
    description: "Full home and commercial remodels — modern, durable, expertly executed.",
    items: ["Home Remodeling", "Commercial Renovation", "Space Transformation"],
  },
  {
    icon: ClipboardList,
    title: "Consultation",
    description: "Expert guidance from concept to completion, tailored to your vision and budget.",
    items: ["Design Consultation", "Project Planning", "Decoration Guidance"],
  },
];

export const WHY_US = [
  { icon: Users, title: "Professional Team", desc: "Seasoned designers, craftsmen, and project managers under one roof." },
  { icon: Sparkles, title: "Quality Materials", desc: "We source only premium, durable finishes that stand the test of time." },
  { icon: Award, title: "Affordable Pricing", desc: "Luxury results with transparent quotes — no hidden surprises." },
  { icon: Clock, title: "Timely Delivery", desc: "Disciplined schedules. We respect your timeline as much as you do." },
  { icon: Palette, title: "Creative Designs", desc: "Original concepts crafted for your space — never templated." },
  { icon: HeartHandshake, title: "Customer Satisfaction", desc: "Your delight is the benchmark. Every detail, signed off by you." },
];

import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export const PORTFOLIO = [
  { id: 1, image: p1, title: "Royal Dining Suite", category: "Interior", tag: "Residential" },
  { id: 2, image: p2, title: "Executive Lobby", category: "Commercial", tag: "Interior" },
  { id: 3, image: p3, title: "Palm Court Villa", category: "Exterior", tag: "Residential" },
  { id: 4, image: p4, title: "Coffered Ceiling Project", category: "Interior", tag: "Residential" },
  { id: 5, image: p5, title: "Grand Hotel Lobby", category: "Commercial", tag: "Interior" },
  { id: 6, image: p6, title: "Evening Terrace", category: "Exterior", tag: "Residential" },
];

export const PROJECTS = [
  {
    image: p1,
    title: "The Adeyemi Residence",
    location: "Maitama, Abuja",
    description: "Full interior transformation of a five-bedroom luxury home with custom cabinetry and statement lighting.",
    services: ["Interior Design", "Ceiling Work", "Lighting"],
  },
  {
    image: p5,
    title: "Crestview Hotel Lobby",
    location: "Lagos Island, Lagos",
    description: "Reception redesign with double-height marble flooring and bespoke crystal installation.",
    services: ["Commercial Renovation", "Lighting Design", "Finishing"],
  },
  {
    image: p3,
    title: "Palm Heights Villa",
    location: "Asokoro, Abuja",
    description: "Exterior facade restoration with stone cladding, landscape lighting, and poolside terrace.",
    services: ["Exterior Finishing", "Landscape", "Lighting"],
  },
];

import c1 from "@/assets/client-1.jpg";
import c2 from "@/assets/client-2.jpg";
import c3 from "@/assets/client-3.jpg";

export const TESTIMONIALS = [
  {
    name: "Adaeze Okafor",
    role: "Homeowner, Abuja",
    image: c1,
    rating: 5,
    text: "Emmastrons transformed our home into something we never imagined possible. The attention to detail, the gold accents, the ceiling — it all feels like a five-star hotel. Truly world-class.",
  },
  {
    name: "Chinedu Ibe",
    role: "Hotel Director, Lagos",
    image: c2,
    rating: 5,
    text: "Professional, punctual, and incredibly creative. They redesigned our lobby on schedule and on budget. Our guests now comment on the design every single day.",
  },
  {
    name: "Mrs. Funmi Bello",
    role: "Restaurant Owner",
    image: c3,
    rating: 5,
    text: "From the first consultation to the final walkthrough, Emmastrons listened, advised, and delivered. The renovation exceeded all my expectations.",
  },
];

export const STATS = [
  { value: "500+", label: "Projects Completed" },
  { value: "12+", label: "Years of Excellence" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40+", label: "Expert Craftsmen" },
];
