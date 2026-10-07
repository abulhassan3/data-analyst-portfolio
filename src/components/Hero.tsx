import { motion } from "framer-motion";
import { Download, FolderGit2, Mail, Sparkles } from "lucide-react";
import profileAsset from "@/assets/profile-photo.jpeg.asset.json";
const profile = profileAsset.url;

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0" style={{ backgroundImage: "var(--gradient-hero)" }} />

      {/* floating chart accent */}
      <motion.svg
        aria-hidden
        className="absolute right-0 top-32 w-[480px] opacity-20 hidden lg:block"
        viewBox="0 0 400 200"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <polyline fill="none" stroke="oklch(0.78 0.2 235)" strokeWidth="2" points="0,160 50,120 100,140 150,80 200,100 250,50 300,70 350,30 400,40" />
        {[0,50,100,150,200,250,300,350,400].map((x,i)=>(
          <circle key={i} cx={x} cy={[160,120,140,80,100,50,70,30,40][i]} r="3" fill="oklch(0.78 0.2 235)" />
        ))}
      </motion.svg>

      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-6"
          >
            <Sparkles size={14} className="text-primary" />
            Available for opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold leading-[1.05] mb-4"
          >
            Md Abul <span className="text-gradient">Hassan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-xl md:text-2xl font-display text-muted-foreground mb-6"
          >
            Data Analyst <span className="text-primary">·</span> Turning Data into Decisions
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            Detail-oriented Data Analyst skilled in data cleaning, visualization, and statistical
            analysis. Proficient in Excel, SQL, Python, Power BI, and Tableau — building dashboards
            and generating actionable business insights.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-3"
          >
            <a
              href="/Md_Abul_Hassan_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.02] transition-transform"
            >
              <Download size={16} /> Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:border-primary/60 transition"
            >
              <FolderGit2 size={16} /> View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-muted transition"
            >
              <Mail size={16} /> Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md"
          >
            {[
              { v: "10+", l: "Skills" },
              { v: "3+", l: "Projects" },
              { v: "100%", l: "Curiosity" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="absolute -inset-6 rounded-full bg-gradient-primary opacity-30 blur-3xl" />
          <div className="relative rounded-3xl glass-card p-3 shadow-elegant">
            <img
              src={profile}
              alt="Md Abul Hassan, Data Analyst"
              className="rounded-2xl w-72 h-72 md:w-80 md:h-80 object-cover"
              loading="eager"
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3 text-xs"
            >
              <div className="text-muted-foreground">Currently</div>
              <div className="font-semibold">Open to work</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass rounded-xl px-4 py-3 text-xs"
            >
              <div className="text-primary font-display text-base">📊</div>
              <div className="font-semibold">Power BI</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
