import { ThemeProvider } from "./components/hooks/use-theme";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Workshops } from "./components/Achievements";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative selection:bg-primary/20 selection:text-primary">
        {/* Subtle grid background pattern */}
        <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-20" />

        <Navbar />

        <main className="container mx-auto px-4 sm:px-6 max-w-6xl">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Workshops />
          <Skills />
          <Education />
          <Contact />
        </main>

        <Footer />
        <Toaster position="bottom-right" richColors />
      </div>
    </ThemeProvider>
  );
}
