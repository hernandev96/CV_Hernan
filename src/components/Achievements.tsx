import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Users, Code, Star, Megaphone } from "lucide-react";

export function Workshops() {
  const workshops = [
    {
      title: "Instructor de taller de DevOps",
      institution: "Semana de la Ingeniería Eléctrica UAM Iztapalapa",
      period: "Año",
      description:
        "Preparé e impartí un taller sobre infraestructura como código con Terraform, CI/CD con GitHub Actions, despliegue en EKS y monitoreo con Grafana.",
      technologies: ["Terraform", "GitHub Actions", "EKS", "Grafana", "DevOps"],
    },
  ];

  return (
    <section id="workshops" className="py-12 border-t border-border/50">
      <div className="space-y-4 text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
          <Megaphone className="w-3.5 h-3.5" />
          <span>Talleres</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Talleres y divulgación
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Experiencia impartiendo talleres de DevOps y tecnologías cloud.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {workshops.map((workshop, index) => (
          <Card
            key={index}
            className="border-border/70 hover:border-primary/40 transition-all duration-200 bg-card/50"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-lg leading-tight">{workshop.title}</CardTitle>
                <Badge variant="secondary" className="text-xs">
                  Taller
                </Badge>
              </div>
              <p className="text-sm font-medium text-primary mt-1">{workshop.institution}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{workshop.period}</p>
            </CardHeader>
            <CardContent className="pt-0 space-y-3">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {workshop.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
                {workshop.technologies.map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="text-xs font-mono bg-background/60 text-muted-foreground border-border/80"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}