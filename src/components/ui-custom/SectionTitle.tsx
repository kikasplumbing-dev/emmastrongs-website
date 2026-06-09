import { motion } from "framer-motion";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export function SectionTitle({ eyebrow, title, subtitle, center, light }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`${center ? "text-center mx-auto" : ""} max-w-3xl mb-14`}
    >
      {eyebrow && (
        <p className={`text-gold tracking-[0.3em] uppercase text-xs font-semibold mb-4 ${center ? "" : ""}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-3xl md:text-5xl font-display font-bold text-balance ${light ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg leading-relaxed ${light ? "text-white/75" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-[3px] w-20 bg-gradient-gold ${center ? "mx-auto" : ""}`} />
    </motion.div>
  );
}
