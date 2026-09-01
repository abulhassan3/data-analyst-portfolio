import { motion } from "framer-motion";
import { ExternalLink, BarChart3, PieChart, Users } from "lucide-react";
import { Section } from "./Section";
import salesData from "@/assets/sales-data.xlsx.asset.json";

const projects = [
  {
    title: "Retail Sales Analysis",
    summary:
      "Analyzed retail sales data to identify underperforming products, customer purchasing trends, and growth opportunities. Cleaned data with Excel, SQL, and Python; conducted EDA and built Power BI dashboards for business decision-making.",
    tags: ["Excel", "SQL", "Python", "Power BI", "EDA"],
    icon: BarChart3,
    metric: "+18%",
    metricLabel: "Insight Lift",
    demo: salesData.url,
    newTab: true,
  },
  {
    title: "Customer Segmentation",
    summary:
      "Used Python (Pandas, scikit-learn) to segment customers by behavior and demographics, enabling targeted marketing strategies and improved retention modeling.",
    tags: ["Python", "Pandas", "Clustering", "EDA"],
    icon: Users,
    metric: "5",
    metricLabel: "Segments",
    demo: "#home",
    newTab: false,
  },
  {
    title: "Sales Performance Dashboard",
    summary:
      "End-to-end Power BI dashboard tracking KPIs, regional performance, and product mix with interactive drill-downs for stakeholders.",
    tags: ["Power BI", "DAX", "Data Modeling"],
    icon: PieChart,
    metric: "12",
    metricLabel: "KPIs Tracked",
    demo: salesData.url,
    newTab: true,
  },
];


export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work, real datasets."
      subtitle="A handful of projects where data led directly to a clearer business outcome."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="group glass-card rounded-2xl p-6 flex flex-col hover:border-primary/50 transition-all"
          >
            <div className="flex items-start justify-between mb-5">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/15 text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition">
                <p.icon size={22} />
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gradient">{p.metric}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{p.metricLabel}</div>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{p.summary}</p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {p.tags.map((t) => (
                <span key={t} className="text-[11px] rounded-md bg-muted px-2 py-0.5 text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-2 pt-4 border-t border-border">
              <a
                href={p.demo}
                {...(p.newTab ? { target: "_blank", rel: "noreferrer" } : {})}
                className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs rounded-lg border border-border py-2 hover:bg-muted hover:text-primary transition"
              >
                <ExternalLink size={13} /> Demo
              </a>
            </div>

          </motion.article>
        ))}
      </div>
    </Section>
  );
}
