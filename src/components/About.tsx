import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Code,
  ShieldCheck,
  Server,
  Zap,
  GraduationCap,
  Sparkles,
  GitPullRequest,
  CheckCircle2,
  Cloud,
  Terminal,
} from "lucide-react";

export function About() {
  const pillars = [
    {
      icon: <Code className="w-6 h-6 text-indigo-500" />,
      title: "Desarrollo Full Stack",
      description:
        "Construcción de interfaces con Angular y Next.js respaldadas por backends en Python (Django REST Framework, FastAPI), Node.js y PHP.",
    },
    {
      icon: <Cloud className="w-6 h-6 text-blue-500" />,
      title: "DevOps y Cloud en AWS",
      description:
        "Infraestructura como código con Terraform, pipelines CI/CD con GitHub Actions, despliegues con CodeDeploy y observabilidad con CloudWatch y Grafana.",
    },
    {
      icon: <Server className="w-6 h-6 text-emerald-500" />,
      title: "APIs REST y Seguridad",
      description:
        "Diseño de endpoints REST con Django REST Framework, integración frontend-backend y autenticación/autorización para control de acceso.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
      title: "Auditoría y Calidad de Software",
      description:
        "Auditoría de sistemas de misión crítica (PREP IEEPCO 2022) y desarrollo de aplicaciones institucionales con enfoque en integridad y operación.",
    },
  ];

  return (
    <section id="about" className="py-12 border-t border-border/50">
      <div className="space-y-4 text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Sobre Mí</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Desarrollador full stack con enfoque en DevOps
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Experiencia profesional en Angular y Django REST Framework, práctica sólida en DevOps sobre AWS y
          talleres de divulgación técnica.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Storytelling card */}
        <div className="lg:col-span-5 space-y-4">
          <Card className="border-border/70 shadow-sm bg-card/60 backdrop-blur-sm">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span>Perfil y Trayectoria</span>
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Desarrollador full stack con experiencia profesional en Angular y Django REST Framework, y
                práctica sólida en DevOps sobre AWS: infraestructura como código con Terraform, pipelines
                CI/CD con GitHub Actions, despliegues con CodeDeploy y observabilidad con CloudWatch.
              </p>

              <p className="text-muted-foreground text-sm leading-relaxed">
                He impartido talleres de DevOps y llevo a producción los frameworks que aprendo por cuenta
                propia. Egreso de la Licenciatura en Computación en 2026 y busco un puesto full stack con
                enfoque en DevOps.
              </p>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Experiencia en hospital institucional, auditoría del sistema PREP IEEPCO 2022 y proyectos
                académicos de DevOps en AWS y monitoreo de calidad del agua con Angular y Docker.
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">
                  Lic. Computación (UAM-I)
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Full Stack Developer
                </Badge>
                <Badge variant="outline" className="text-xs">
                  DevOps en AWS
                </Badge>
                <Badge variant="outline" className="text-xs">
                  Next.js
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 4 Pillars grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pillars.map((pillar, idx) => (
            <Card
              key={idx}
              className="border-border/60 hover:border-primary/40 hover:shadow-md transition-all duration-300 bg-card/50"
            >
              <CardContent className="p-5 space-y-3">
                <div className="p-2.5 w-fit rounded-lg bg-background border border-border/80 shadow-xs">
                  {pillar.icon}
                </div>
                <h4 className="font-semibold text-base text-foreground">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}