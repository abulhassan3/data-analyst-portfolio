import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { Section } from "./Section";

export function Resume() {
  return (
    <Section
      id="resume"
      eyebrow="Resume"
      title="One page. Every detail."
      subtitle="Download the full resume or preview it inline."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-card rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8"
      >
        <div className="w-32 h-40 rounded-xl bg-gradient-primary p-px shadow-glow shrink-0">
          <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
            <FileText size={40} className="text-primary" />
          </div>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-semibold mb-2">Md Abul Hassan — Data Analyst</h3>
          <p className="text-muted-foreground text-sm mb-5 max-w-xl">
            Updated April 2026 · 1 page · PDF · Includes full skill set, education, and project
            details.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <a
              href="/Md_Abul_Hassan_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="/Md_Abul_Hassan_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:border-primary/60 transition"
            >
              <FileText size={16} /> Preview
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
