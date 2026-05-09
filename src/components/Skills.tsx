import { motion } from "framer-motion";
import { Section } from "./Section";

const skills = [
  { name: "Data Analysis", level: 88 },
  { name: "SQL", level: 85 },
  { name: "Python (Pandas, NumPy, Matplotlib)", level: 80 },
  { name: "Microsoft Excel", level: 90 },
  { name: "Power BI / Tableau", level: 82 },
  { name: "Data Cleaning", level: 88 },
  { name: "Data Visualization", level: 85 },
  { name: "Exploratory Data Analysis", level: 80 },
  { name: "Dashboard Creation", level: 84 },
];

const tools = ["Jupyter", "Google Sheets", "MySQL", "Pandas", "NumPy", "Matplotlib", "Power BI", "Tableau", "Excel", "Git"];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills & Tools"
      title="A toolkit built for clean data and clear insight."
      subtitle="From raw CSVs to executive dashboards — these are the technologies I use day to day."
    >
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <div className="flex justify-between mb-2 text-sm">
              <span className="font-medium">{s.name}</span>
              <span className="text-muted-foreground">{s.level}%</span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.1 + i * 0.05, ease: "easeOut" }}
                className="h-full bg-gradient-primary rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-14">
        <div className="text-sm text-muted-foreground mb-4">Tools I work with</div>
        <div className="flex flex-wrap gap-2.5">
          {tools.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="rounded-full glass px-4 py-1.5 text-sm hover:border-primary/60 hover:text-primary transition cursor-default"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </Section>
  );
}
