import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ThemeProvider } from "./components/hooks/use-theme";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background transition-colors duration-300">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Header />
          <Skills />
          <Experience />
          <Education />
          {/* <Projects /> */}
          <Contact />
        </div>
      </div>
    </ThemeProvider>
  );
}
