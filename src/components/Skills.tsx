import { motion } from "framer-motion";
import { Database, LineChart, BarChart3, Sparkles } from "lucide-react";
import { Section } from "./Section";

const coreSkills = [
  { name: "Advanced Excel (Pivot Tables, XLOOKUP)", level: 90 },
  { name: "SQL (Joins, CTEs, Window Functions)", level: 85 },
  { name: "Python (Pandas, NumPy, Matplotlib)", level: 80 },
  { name: "Data Cleaning & Data Validation", level: 88 },
  { name: "Exploratory Data Analysis (EDA)", level: 84 },
  { name: "Power BI / Tableau Dashboards", level: 82 },
];

const categories = [
  {
    icon: Database,
    title: "Data Handling",
    items: ["SQL", "Advanced Excel", "Python", "Pandas", "NumPy", "Data Cleaning", "Data Validation", "ETL / ELT Fundamentals"],
  },
  {
    icon: LineChart,
    title: "Analysis & Statistics",
    items: ["Data Analysis", "Exploratory Data Analysis (EDA)", "Statistical Analysis", "KPI Analysis", "Analytical Problem Solving"],
  },
  {
    icon: BarChart3,
    title: "Visualization & BI",
    items: ["Power BI", "Tableau", "Microsoft Excel", "Dashboard Development", "Data Visualization", "Business Intelligence", "Data Storytelling", "Data Reporting"],
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    items: ["Generative AI", "AI-assisted Data Analysis", "Prompt Engineering", "AI Tools for Reporting"],
  },
];

const tools = ["Jupyter", "Google Sheets", "MySQL", "Power Query", "Power BI", "Tableau", "Excel", "Git", "ChatGPT"];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills & Tools"
      title="A toolkit built for clean data and clear insight."
      subtitle="From raw CSVs to executive dashboards and AI-assisted analysis — these are the skills I use day to day."
    >
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-5">
        {coreSkills.map((s, i) => (
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

      <div className="mt-14 grid sm:grid-cols-2 gap-5">
        {categories.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-card rounded-2xl p-6 hover:border-primary/50 transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center shrink-0">
                <c.icon size={18} />
              </div>
              <h3 className="font-semibold">{c.title}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {c.items.map((it) => (
                <span key={it} className="text-[11px] rounded-md bg-muted px-2 py-1 text-muted-foreground">
                  {it}
                </span>
              ))}
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
