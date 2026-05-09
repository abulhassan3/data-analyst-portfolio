import { Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/icons/Brand";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row gap-6 justify-between items-center">
        <div className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} <span className="text-foreground font-medium">Md Abul Hassan</span>. Crafted with data, design, and care.
        </div>
        <div className="flex items-center gap-3">
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-primary transition">
            <Linkedin size={15} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-primary transition">
            <Github size={15} />
          </a>
          <a href="mailto:grdabul@gmail.com" className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:text-primary transition">
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
