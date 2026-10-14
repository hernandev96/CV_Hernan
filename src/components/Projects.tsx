import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import {
  FolderGit2,
  Info,
  Github,
  ExternalLink,
  CheckCircle2,
  Container,
  CloudCog,
} from "lucide-react";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "DevOps: Automatización, Despliegue y Monitoreo de aplicaciones",
      category: "DevOps & Cloud",
      subtitle:
        "Proyecto académico – Universidad Autónoma Metropolitana Unidad Iztapalapa (Sep 2025 – May 2026)",
      description:
        "Provisionamiento de infraestructura en AWS con Terraform, pipelines CI/CD con GitHub Actions y CodeDeploy, OIDC y observabilidad con CloudWatch.",
      detailedDescription:
        "Configuré OIDC entre pipelines de CI/CD y AWS para autenticar sin credenciales estáticas. Provisioné infraestructura en AWS con Terraform mediante módulos reutilizables de red, roles IAM y cómputo, incluyendo ALB y Auto Scaling Group. Automaticé construcción, pruebas y despliegue con GitHub Actions y AWS CodeDeploy: terraform plan en cada pull request y apply al hacer merge. Implementé observabilidad con CloudWatch (agente, logs, alarmas y dashboard) y rollback automático de despliegues en CodeDeploy.",
      architecturePoints: [
        "Configuré OIDC entre pipelines de CI/CD y AWS para autenticar sin credenciales estáticas.",
        "Provisioné infraestructura en AWS con Terraform mediante módulos reutilizables de red, roles IAM y cómputo, incluyendo ALB y Auto Scaling Group.",
        "Automaticé construcción, pruebas y despliegue con GitHub Actions y AWS CodeDeploy: terraform plan en cada pull request y apply al hacer merge.",
        "Implementé observabilidad con CloudWatch (agente, logs, alarmas y dashboard) y rollback automático de despliegues en CodeDeploy.",
      ],
      technologies: [
        "AWS",
        "Terraform",
        "GitHub Actions",
        "AWS CodeDeploy",
        "CloudWatch",
        "OIDC",
        "IAM",
        "ALB",
        "Auto Scaling Group",
      ],
      githubUrl: "https://github.com/hernandev96",
      featured: true,
      statusBadge: "DevOps",
    },
    {
      title: "Sistema de monitoreo de lecturas de calidad del agua",
      category: "Full Stack",
      subtitle:
        "Proyecto académico – Universidad Autónoma Metropolitana Unidad Iztapalapa (Ene 2024 – Jul 2024)",
      description:
        "Sistema de monitoreo de lecturas de calidad del agua desarrollado desde cero con Angular, interfaces responsivas y contenerización con Docker.",
      detailedDescription:
        "Desarrollé desde cero el sistema de monitoreo con Angular, aprendiendo el framework de forma autodidacta. Construí interfaces responsivas conectadas a una API REST para visualizar en tiempo real las lecturas de sensores. Contenericé la aplicación con Docker para estandarizar su despliegue en distintos entornos.",
      architecturePoints: [
        "Desarrollé desde cero el sistema de monitoreo con Angular, aprendiendo el framework de forma autodidacta.",
        "Construí interfaces responsivas conectadas a una API REST para visualizar en tiempo real las lecturas de sensores.",
        "Contenericé la aplicación con Docker para estandarizar su despliegue en distintos entornos.",
      ],
      technologies: ["Angular", "TypeScript", "REST API", "Docker", "Interfaces responsivas"],
      githubUrl: "https://github.com/hernandev96",
      featured: false,
    },
  ];

  const categories = ["Todos", "DevOps & Cloud", "Full Stack"];

  const filteredProjects =
    activeFilter === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-12 border-t border-border/50">
      <div className="space-y-4 text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Portafolio</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Proyectos y Soluciones Desarrolladas
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Una selección de proyectos destacados que demuestran mi capacidad para diseñar,
          implementar y automatizar software y DevOps en diferentes stacks.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 pt-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                activeFilter === category
                  ? "bg-primary text-primary-foreground shadow-sm font-semibold scale-105"
                  : "bg-muted/70 text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <Card
            key={index}
            className={`flex flex-col justify-between border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              project.featured
                ? "border-primary/50 shadow-md bg-gradient-to-b from-card to-primary/5"
                : "border-border/70 bg-card/60"
            }`}
          >
            <CardHeader className="pb-3 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <Badge
                  variant={project.featured ? "default" : "secondary"}
                  className="text-[11px] font-medium"
                >
                  {project.category}
                </Badge>
                {project.statusBadge && (
                  <Badge
                    variant="outline"
                    className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 border-emerald-500/40 bg-emerald-500/10"
                  >
                    {project.statusBadge}
                  </Badge>
                )}
              </div>

              <div>
                <CardTitle className="text-lg font-bold leading-tight hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-xs text-primary font-medium mt-1">
                  {project.subtitle}
                </p>
              </div>
            </CardHeader>

            <CardContent className="space-y-4 flex-1 flex flex-col justify-between">
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {project.description}
              </p>

              <div className="space-y-4">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.map((tech, techIdx) => (
                    <Badge
                      key={techIdx}
                      variant="outline"
                      className="text-[11px] font-mono bg-background/60 text-muted-foreground border-border/80"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 pt-2 border-t border-border/50">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="flex-1 gap-1 text-xs h-8"
                        onClick={() => setSelectedProject(project)}
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Detalles</span>
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="default" className="text-xs">
                            {project.category}
                          </Badge>
                          {project.statusBadge && (
                            <Badge
                              variant="outline"
                              className="text-xs text-emerald-500 border-emerald-500/40"
                            >
                              {project.statusBadge}
                            </Badge>
                          )}
                        </div>
                        <DialogTitle className="text-xl font-bold">
                          {project.title}
                        </DialogTitle>
                        <DialogDescription className="text-primary font-medium">
                          {project.subtitle}
                        </DialogDescription>
                      </DialogHeader>

                      <div className="space-y-4 pt-2 text-sm">
                        <p className="text-foreground/90 leading-relaxed">
                          {project.detailedDescription || project.description}
                        </p>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                            Puntos clave de ingeniería:
                          </h4>
                          <ul className="space-y-1.5 text-xs sm:text-sm">
                            {project.architecturePoints.map((point, ptIdx) => (
                              <li key={ptIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-2">
                            Tecnologías implementadas:
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((t, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {t}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-end gap-2 pt-4 border-t border-border">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Button
                                size="sm"
                                variant="outline"
                                className="gap-1.5 text-xs"
                              >
                                <Github className="w-3.5 h-3.5" />
                                <span>Ver en GitHub</span>
                              </Button>
                            </a>
                          )}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                    >
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-1 text-xs h-8 px-2.5"
                        title="Ver en GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </Button>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target={project.liveUrl.startsWith("#") ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      className="shrink-0"
                    >
                      <Button
                        size="sm"
                        variant="ghost"
                        className="gap-1 text-xs h-8 px-2.5 text-primary hover:text-primary"
                        title="Ver demo o enlace"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}