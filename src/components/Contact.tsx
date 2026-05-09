import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Section } from "./Section";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(80),
  email: z.string().trim().email("Invalid email").max(160),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    const subject = encodeURIComponent(`Portfolio inquiry from ${result.data.name}`);
    const body = encodeURIComponent(`${result.data.message}\n\n— ${result.data.name} (${result.data.email})`);
    window.location.href = `mailto:grdabul@gmail.com?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something with data."
      subtitle="Open to internship, junior, and freelance Data Analyst roles."
    >
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 space-y-5"
        >
          {[
            { icon: Mail, label: "Email", value: "grdabul@gmail.com", href: "mailto:grdabul@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91 88629 65493", href: "tel:+918862965493" },
            { icon: MapPin, label: "Location", value: "Delhi, India" },
          ].map((c) => (
            <div key={c.label} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
                <c.icon size={18} />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                {c.href ? (
                  <a href={c.href} className="font-medium hover:text-primary transition">{c.value}</a>
                ) : (
                  <div className="font-medium">{c.value}</div>
                )}
              </div>
            </div>
          ))}
          <div className="pt-4 border-t border-border flex gap-3">
            {[
              { icon: Linkedin, href: "https://linkedin.com/" },
              { icon: Github, href: "https://github.com/" },
              { icon: Mail, href: "mailto:grdabul@gmail.com" },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:bg-gradient-primary hover:text-primary-foreground hover:scale-110 transition"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 space-y-4"
        >
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Name</label>
            <input
              type="text"
              maxLength={80}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-lg bg-input/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Email</label>
            <input
              type="email"
              maxLength={160}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-lg bg-input/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">Message</label>
            <textarea
              rows={5}
              maxLength={1000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-lg bg-input/60 border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition resize-none"
              placeholder="Tell me about the role or project…"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.01] transition-transform"
          >
            <Send size={16} /> Send Message
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
