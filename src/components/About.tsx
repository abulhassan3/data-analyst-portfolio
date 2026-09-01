import { motion } from "framer-motion";
import { Brain, Target, LineChart, Lightbulb } from "lucide-react";
import { Section } from "./Section";

const traits = [
  { icon: Brain, title: "Analytical Thinking", desc: "Breaking down complex datasets into clear, structured patterns." },
  { icon: LineChart, title: "Data Visualization", desc: "Designing dashboards that tell a story at a glance." },
  { icon: Target, title: "Problem Solving", desc: "Translating business questions into measurable answers." },
  { icon: Lightbulb, title: "Business Insight", desc: "Connecting numbers to outcomes that drive decisions." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="Curious by nature, analytical by craft."
      subtitle="I'm a fresher Data Analyst from Hyderabad, India, with a Science background and a passion for uncovering the story behind the numbers."
    >
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 space-y-4 text-muted-foreground leading-relaxed"
        >
          <p>
            With a foundation in Chemistry and a sharp eye for detail, I transitioned into data
            analytics to combine scientific rigor with real-world business impact.
          </p>
          <p>
            I work fluently across <span className="text-foreground font-medium">SQL, Python, Excel, Power BI, and Tableau</span> — cleaning messy data, surfacing
            trends through EDA, and building dashboards that decision-makers actually use.
          </p>
          <p>
            My goal: contribute to a forward-thinking team where data drives strategy, and every
            chart leads to a smarter decision.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {traits.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/50 transition group"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/15 text-primary mb-4 group-hover:scale-110 transition">
                <t.icon size={20} />
              </div>
              <h3 className="font-semibold mb-1.5">{t.title}</h3>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
