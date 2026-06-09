import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Logo } from "@/components/Logo";
import { CONTACT, NAV, SERVICES } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80 pt-20 pb-8 mt-32">
      <div className="container-px mx-auto max-w-7xl grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" size="md" />
          <p className="mt-5 text-sm leading-relaxed text-white/70">
            Transforming spaces into stunning masterpieces — interior and exterior decoration crafted with elegance and precision.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 grid place-items-center rounded-full border border-white/15 hover:bg-gold hover:text-navy hover:border-gold transition-all"
                aria-label="Social link"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white text-lg font-display mb-5">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-gold transition-colors">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg font-display mb-5">Services</h4>
          <ul className="space-y-3 text-sm">
            {SERVICES.map((s) => (
              <li key={s.title}><Link to="/services" className="hover:text-gold transition-colors">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg font-display mb-5">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3"><Phone size={16} className="text-gold mt-0.5 shrink-0" />
              <span>{CONTACT.phone1}<br />{CONTACT.phone2}</span>
            </li>
            <li className="flex gap-3"><Mail size={16} className="text-gold mt-0.5 shrink-0" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-gold break-all">{CONTACT.email}</a>
            </li>
            <li className="flex gap-3"><MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <span>{CONTACT.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-px mx-auto max-w-7xl mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/60">
        <p>© {new Date().getFullYear()} Emmastrons Interiors & Exterior Decorations. All rights reserved.</p>
        <p>Crafted with elegance.</p>
      </div>
    </footer>
  );
}
