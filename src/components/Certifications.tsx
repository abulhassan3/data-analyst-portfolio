import { motion } from "framer-motion";
import { Award, BadgeCheck } from "lucide-react";
import { Section } from "./Section";

const certs = [
  { title: "Data Analytics Fundamentals", issuer: "Self-paced Bootcamp", year: "2025" },
  { title: "SQL for Data Analysis", issuer: "Online Course", year: "2025" },
  { title: "Power BI Essentials", issuer: "Microsoft Learn", year: "2025" },
  { title: "Python for Data Science", issuer: "Online Course", year: "2024" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Always learning, always shipping."
      subtitle="Continuous learning across the modern data stack."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {certs.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group glass-card rounded-2xl p-6 hover:border-primary/50 transition-all"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/15 text-primary group-hover:rotate-6 transition">
                <Award size={20} />
              </div>
              <BadgeCheck size={18} className="text-primary opacity-0 group-hover:opacity-100 transition" />
            </div>
            <h3 className="font-semibold mb-1">{c.title}</h3>
            <div className="text-xs text-muted-foreground">{c.issuer}</div>
            <div className="text-xs text-primary mt-2">{c.year}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
