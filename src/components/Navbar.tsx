import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/button";
import {
  Code2,
  Download,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Sobre mí", href: "#about" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Talleres", href: "#workshops" },
  { label: "Habilidades", href: "#skills" },
  { label: "Educación", href: "#education" },
  { label: "Contacto", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group text-foreground font-semibold hover:text-primary transition-colors"
        >
          <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-bold tracking-tight text-base">
              <span>hernandev</span>
              <span className="text-primary font-mono text-sm">.dev</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-muted-foreground font-normal">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Full Stack</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.href);
              }}
              className="px-3 py-1.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href="https://github.com/hernandev96"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Hernán"
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/hector-hernan-dominguez-gonzalez-25bb611b4"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Hernán"
            className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <ThemeToggle />

          <a
            href="/Hector_Hernan_Dominguez_Gonzalez_FullStack.pdf"
            download="Hernan_Dominguez_CV.pdf"
            className="ml-1"
          >
            <Button
              size="sm"
              className="gap-1.5 font-medium shadow-sm hover:shadow transition-all"
            >
              <Download className="w-4 h-4" />
              <span>CV</span>
            </Button>
          </a>
        </div>

        {/* Mobile menu button & Theme toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            className="text-foreground"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border/60 bg-background/95 backdrop-blur-lg px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-foreground hover:bg-muted transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-border flex flex-col gap-2.5">
            <a
              href="/Hector_Hernan_Dominguez_Gonzalez_FullStack.pdf"
              download="Hernan_Dominguez_CV.pdf"
              className="w-full"
            >
              <Button className="w-full gap-2">
                <Download className="w-4 h-4" />
                Descargar CV en PDF
              </Button>
            </a>

            <div className="flex items-center justify-around pt-2 text-muted-foreground">
              <a
                href="https://github.com/hernandev96"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm hover:text-foreground p-1"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/hector-hernan-dominguez-gonzalez-25bb611b4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm hover:text-foreground p-1"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:dominguezgonzalezhectorhernan@gmail.com"
                className="flex items-center gap-1.5 text-sm hover:text-foreground p-1"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
