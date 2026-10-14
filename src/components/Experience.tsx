import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Briefcase,
  Calendar,
  MapPin,
  Building,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Hospital,
  Terminal,
} from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Desarrollador Full-Stack",
      company: "Hospital Infantil de México Federico Gómez",
      location: "Ciudad de México, México",
      period: "Mayo 2025 – Noviembre 2025",
      type: "Sector Salud",
      icon: <Hospital className="w-5 h-5 text-indigo-500" />,
      description:
        "Desarrollé interfaces en Angular con una biblioteca de componentes reutilizables para la plataforma institucional del hospital. Diseñé endpoints de una API REST con Django e integré su consumo desde el frontend. Implementé autenticación y autorización con Django REST Framework para controlar el acceso a los recursos de la plataforma.",
      achievements: [
        "Desarrollé interfaces en Angular con una biblioteca de componentes reutilizables para la plataforma institucional del hospital.",
        "Diseñé endpoints de una API REST con Django e integré su consumo desde el frontend.",
        "Implementé autenticación y autorización con Django REST Framework para controlar el acceso a los recursos de la plataforma.",
      ],
      technologies: [
        "Angular",
        "Django",
        "Django REST Framework",
        "API REST",
        "Autenticación/Autorización",
      ],
      isCurrent: false,
    },
    {
      title: "Auditor del sistema informático PREP IEEPCO 2022",
      company: "Universidad Autónoma Metropolitana Unidad Iztapalapa",
      location: "Ciudad de México, México",
      period: "Marzo 2022 – Mayo 2022",
      type: "Sector Electoral / Académico",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-500" />,
      description:
        "Audité la integridad y operación del sistema del Programa de Resultados Electorales Preliminares durante el proceso electoral 2022.",
      achievements: [
        "Audité la integridad y operación del sistema del Programa de Resultados Electorales Preliminares durante el proceso electoral 2022.",
      ],
      technologies: ["Auditoría", "Integridad", "Operación del sistema"],
      isCurrent: false,
    },
  ];

  return (
    <section id="experience" className="py-12 border-t border-border/50">
      <div className="space-y-4 text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Trayectoria</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Experiencia Profesional
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Experiencia profesional en Angular y Django REST Framework, y auditoría del sistema PREP IEEPCO 2022.
        </p>
      </div>

      <div className="relative border-l-2 border-primary/30 ml-4 sm:ml-8 md:ml-12 pl-6 sm:pl-8 space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Timeline point indicator */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-primary shadow-sm group-hover:scale-110 transition-transform">
              {exp.icon}
            </div>

            <Card className="border-border/70 hover:border-primary/50 hover:shadow-lg transition-all duration-300 bg-card/70 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <CardTitle className="text-xl font-bold text-foreground">
                        {exp.title}
                      </CardTitle>
                      {exp.isCurrent && (
                        <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 text-xs">
                          Puesto Actual
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        {exp.type}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1 font-medium text-foreground/80">
                        <Building className="w-4 h-4 text-primary" />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs sm:text-sm">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-muted text-foreground border border-border/60 w-fit">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements Bullet Points */}
                <div className="space-y-2 pt-1">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Responsabilidades y logros clave:
                  </h4>
                  <ul className="space-y-1.5 text-sm text-foreground/90">
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies used */}
                <div className="pt-2 border-t border-border/50">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs font-mono bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}