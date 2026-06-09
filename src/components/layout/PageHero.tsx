import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
}

export function PageHero({ eyebrow, title, subtitle, image }: Props) {
  return (
    <section className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/30" />
      <div className="relative container-px mx-auto max-w-7xl pb-20 pt-32 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4">
            <Link to="/" className="hover:underline">Home</Link> / {eyebrow}
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
