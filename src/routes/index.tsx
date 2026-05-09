import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Certifications } from "@/components/Certifications";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Md Abul Hassan — Data Analyst Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Md Abul Hassan, Data Analyst skilled in SQL, Python, Excel, Power BI and Tableau. Dashboards, EDA, and data-driven business insights.",
      },
      { name: "keywords", content: "Data Analyst, SQL, Python, Power BI, Tableau, Excel, EDA, Dashboards, Md Abul Hassan" },
      { property: "og:title", content: "Md Abul Hassan — Data Analyst Portfolio" },
      { property: "og:description", content: "Data Analyst portfolio: dashboards, EDA, and insights." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  );
}
