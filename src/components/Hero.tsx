import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  Download,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  Terminal,
  ExternalLink,
  Code,
  CheckCircle2,
  Sparkles,
  Layers,
  ShieldCheck,
  Briefcase,
} from "lucide-react";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"profile" | "terminal">("terminal");

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-12 md:pb-24">
      {/* Background radial accent glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Text & Value Proposition */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Disponible para nuevos proyectos y contratación</span>
          </div>

          {/* Main Title */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight sm:leading-tight">
              Hola, soy{" "}
              <span className="bg-gradient-to-r from-primary via-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-primary dark:via-indigo-400 dark:to-purple-400">
                Héctor Hernán
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-semibold text-foreground/90">
              Desarrollador Full Stack · Angular · Next.js · Python · DevOps en AWS
            </p>
          </div>

          {/* Subtitle / Bio */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Desarrollador full stack con experiencia profesional en Angular y Django REST Framework, y
            práctica sólida en DevOps sobre AWS: infraestructura como código con Terraform, pipelines CI/CD
            con GitHub Actions, despliegues con CodeDeploy y observabilidad con CloudWatch. He impartido
            talleres de DevOps y llevo a producción los frameworks que aprendo por cuenta propia. Egreso de
            la Licenciatura en Computación en 2026; busco un puesto full stack con enfoque en DevOps.
          </p>

          {/* Contact Details Quick Pills */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs sm:text-sm text-muted-foreground pt-1">
            <div className="flex items-center gap-1.5 bg-muted/60 px-2.5 py-1 rounded-md border border-border/50">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>Tezoyuca, Estado de México, México</span>
            </div>
            <div className="flex items-center gap-1.5 bg-muted/60 px-2.5 py-1 rounded-md border border-border/50">
              <Mail className="w-3.5 h-3.5 text-primary" />
              <span>dominguezgonzalezhectorhernan@gmail.com</span>
            </div>
            <div className="flex items-center gap-1.5 bg-muted/60 px-2.5 py-1 rounded-md border border-border/50">
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>+52 59 5957 1482</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="w-full sm:w-auto gap-2 text-base shadow-md hover:shadow-lg transition-all"
            >
              <span>Ver Proyectos</span>
              <ArrowRight className="w-4 h-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="w-full sm:w-auto gap-2 text-base border-2 hover:bg-muted"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span>Contactar</span>
            </Button>

            <a
              href="/Hector_Hernan_Dominguez_Gonzalez_FullStack.pdf"
              download="Hernan_Dominguez_CV.pdf"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                variant="ghost"
                className="w-full sm:w-auto gap-2 text-base text-muted-foreground hover:text-foreground"
              >
                <Download className="w-4 h-4" />
                <span>Descargar CV</span>
              </Button>
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-border/60">
            <div className="p-3 rounded-lg bg-card border border-border/60 text-center lg:text-left shadow-xs">
              <div className="text-2xl font-bold text-primary font-mono">2</div>
              <div className="text-xs text-muted-foreground">Experiencias</div>
            </div>
            <div className="p-3 rounded-lg bg-card border border-border/60 text-center lg:text-left shadow-xs">
              <div className="text-2xl font-bold text-primary font-mono">2</div>
              <div className="text-xs text-muted-foreground">Proyectos</div>
            </div>
            <div className="p-3 rounded-lg bg-card border border-border/60 text-center lg:text-left shadow-xs">
              <div className="text-2xl font-bold text-primary font-mono">1</div>
              <div className="text-xs text-muted-foreground">Taller impartido</div>
            </div>
            <div className="p-3 rounded-lg bg-card border border-border/60 text-center lg:text-left shadow-xs">
              <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 font-mono">2026</div>
              <div className="text-xs text-muted-foreground">Egreso</div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Developer Profile & Code Card */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-md bg-card/80 backdrop-blur-md rounded-2xl border border-border/80 shadow-xl overflow-hidden transition-all hover:shadow-2xl">
            {/* Terminal Window Header Bar */}
            <div className="px-4 py-3 bg-muted/80 border-b border-border/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                <span className="text-xs font-mono text-muted-foreground ml-2">
                  hernandev@portfolio:~
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveTab("terminal")}
                  className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                    activeTab === "terminal"
                      ? "bg-background text-primary font-semibold shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  bio.ts
                </button>
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                    activeTab === "profile"
                      ? "bg-background text-primary font-semibold shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  foto.view
                </button>
              </div>
            </div>

            {/* Window Content */}
            <div className="p-5">
              {activeTab === "terminal" ? (
                <div className="font-mono text-xs sm:text-[13px] leading-relaxed space-y-2 text-foreground/90 overflow-x-auto">
                  <div className="text-muted-foreground">
                    // Información del Ingeniero de Software
                  </div>
                  <div>
                    <span className="text-purple-600 dark:text-purple-400">const</span>{" "}
                    <span className="text-blue-600 dark:text-blue-400">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-muted-foreground">name:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">
                      "Héctor Hernán Domínguez"
                    </span>
                    ,
                  </div>
                  <div className="pl-4">
                    <span className="text-muted-foreground">alias:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">
                      "hernandev96"
                    </span>
                    ,
                  </div>
                  <div className="pl-4">
                    <span className="text-muted-foreground">degree:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">
                      "Lic. en Computación (Egreso 2026)"
                    </span>
                    ,
                  </div>
                  <div className="pl-4">
                    <span className="text-muted-foreground">role:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">
                      "Desarrollador Full Stack"
                    </span>
                    ,
                  </div>
                  <div className="pl-4">
                    <span className="text-muted-foreground">focus:</span>{" "}
                    <span className="text-emerald-600 dark:text-emerald-400">
                      "Full Stack con enfoque en DevOps"
                    </span>
                    ,
                  </div>
                  <div className="pl-4">
                    <span className="text-muted-foreground">stack:</span> [
                    <span className="text-amber-600 dark:text-amber-300">
                      "Angular"
                    </span>
                    ,{" "}
                    <span className="text-amber-600 dark:text-amber-300">
                      "Next.js"
                    </span>
                    ,{" "}
                    <span className="text-amber-600 dark:text-amber-300">
                      "Python"
                    </span>
                    ,{" "}
                    <span className="text-amber-600 dark:text-amber-300">
                      "Django REST"
                    </span>
                    ,{" "}
                    <span className="text-amber-600 dark:text-amber-300">
                      "AWS"
                    </span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-muted-foreground">openToWork:</span>{" "}
                    <span className="text-emerald-500 font-bold">true</span>
                  </div>
                  <div>&#125;;</div>

                  <div className="pt-2 flex items-center gap-1.5 text-primary text-xs">
                    <span className="text-emerald-500">$</span>
                    <span className="animate-pulse">hernandev --ready-to-collaborate</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center text-center p-2 space-y-4">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                    <Avatar className="w-36 h-36 border-4 border-background shadow-xl">
                      <AvatarImage
                        src="/images/perfil_cv.png"
                        alt="Héctor Hernán Domínguez González"
                        className="object-cover"
                      />
                      <AvatarFallback className="text-xl font-bold bg-primary/20 text-primary">
                        HD
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">Héctor Hernán Domínguez</h3>
                    <p className="text-sm text-primary font-medium">
                      Desarrollador Full Stack
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      UAM-I • AWS · DevOps
                    </p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-1.5">
                    <Badge variant="secondary" className="text-xs font-mono">
                      Angular
                    </Badge>
                    <Badge variant="secondary" className="text-xs font-mono">
                      Django
                    </Badge>
                    <Badge variant="secondary" className="text-xs font-mono">
                      AWS
                    </Badge>
                    <Badge variant="secondary" className="text-xs font-mono">
                      Terraform
                    </Badge>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom bar with status */}
            <div className="px-4 py-2.5 bg-muted/40 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground font-mono">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span>Estado: Activo & Disponible</span>
              </span>
              <span>UTF-8</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}