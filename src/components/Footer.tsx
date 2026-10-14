import { Code2, ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-16 border-t border-border/60 bg-card/40 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2 font-bold text-lg">
              <div className="w-7 h-7 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Code2 className="w-4 h-4" />
              </div>
              <span>Héctor Hernán Domínguez González</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Desarrollador Full Stack • DevOps en AWS • Licenciatura en Computación (UAM-I)
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">
              Sobre mí
            </a>
            <a href="#experience" className="hover:text-primary transition-colors">
              Experiencia
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Proyectos
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Habilidades
            </a>
            <a href="#education" className="hover:text-primary transition-colors">
              Educación
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contacto
            </a>
          </div>

          {/* Social links & scroll to top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/hernandev96"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-full transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/hector-hernan-dominguez-gonzalez-25bb611b4"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:dominguezgonzalezhectorhernan@gmail.com"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-muted rounded-full transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full w-8 h-8 ml-2 hover:bg-primary hover:text-primary-foreground transition-all"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/40 text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Héctor Hernán Domínguez González (hernandev96).
            Construido con React, TypeScript y Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
