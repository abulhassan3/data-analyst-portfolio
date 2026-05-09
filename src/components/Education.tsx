import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    title: "Bachelor of Science (Chemistry)",
    org: "Vinoba Bhave University, Hazaribagh, Jharkhand",
    detail: "Theoretical principles in Qualitative Analysis (H2).",
  },
  {
    title: "Higher Secondary (Science)",
    org: "Shubhash Public School, Giridih, Jharkhand",
    detail: "Science stream — foundation in Math, Physics, Chemistry.",
  },
  {
    title: "Senior Secondary",
    org: "Giridih High School, Giridih, Jharkhand",
    detail: "Completed senior secondary education.",
  },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Experience & Education"
      title="The path that led here."
      subtitle="A Science background that built the analytical foundation behind my work in data."
    >
      <div className="relative pl-8 md:pl-12">
        <div className="absolute left-3 md:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative mb-10 last:mb-0"
          >
            <div className="absolute -left-8 md:-left-12 top-2 w-7 h-7 rounded-full bg-card border-2 border-primary flex items-center justify-center shadow-glow">
              <GraduationCap size={14} className="text-primary" />
            </div>
            <div className="glass-card rounded-xl p-6">
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <div className="text-sm text-primary mb-2">{item.org}</div>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
