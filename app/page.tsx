import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Navigation />
      <Hero />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
