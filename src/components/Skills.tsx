import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import {
  Code2,
  Cloud,
  Wrench,
  Server,
  Sparkles,
  Search,
  CheckCircle2,
  Terminal,
  Monitor,
  Languages,
} from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  description: string;
  skills: { name: string; highlight?: boolean }[];
  accentBorder: string;
  badgeColor: string;
}

export function Skills() {
  const [searchTerm, setSearchTerm] = useState("");

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-5 h-5 text-blue-500" />,
      description: "Construcción de interfaces interactivas, responsivas y accesibles.",
      accentBorder: "hover:border-blue-500/40",
      badgeColor: "border-blue-500/20 text-blue-700 dark:text-blue-300 bg-blue-500/5",
      skills: [
        { name: "Angular", highlight: true },
        { name: "Next.js" },
        { name: "TypeScript", highlight: true },
        { name: "JavaScript", highlight: true },
        { name: "HTML", highlight: true },
        { name: "CSS", highlight: true },
        { name: "Bootstrap" },
        { name: "Tailwind CSS", highlight: true },
        { name: "AJAX" },
        { name: "JQuery" },
      ],
    },
    {
      title: "Backend & APIs",
      icon: <Server className="w-5 h-5 text-emerald-500" />,
      description: "Servicios web robustos y APIs RESTful seguras.",
      accentBorder: "hover:border-emerald-500/40",
      badgeColor: "border-emerald-500/20 text-emerald-700 dark:text-emerald-300 bg-emerald-500/5",
      skills: [
        { name: "Python", highlight: true },
        { name: "Django REST Framework", highlight: true },
        { name: "FastAPI" },
        { name: "Node.js", highlight: true },
        { name: "PHP" },
        { name: "SQL" },
        { name: "MySQL", highlight: true },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-5 h-5 text-indigo-500" />,
      description: "Automatización, integración continua y despliegue de entornos sobre AWS.",
      accentBorder: "hover:border-indigo-500/40",
      badgeColor: "border-indigo-500/20 text-indigo-700 dark:text-indigo-300 bg-indigo-500/5",
      skills: [
        { name: "AWS", highlight: true },
        { name: "AWS IAM" },
        { name: "AWS EKS" },
        { name: "AWS ECR" },
        { name: "AWS CodeDeploy" },
        { name: "AWS CloudWatch" },
        { name: "Terraform", highlight: true },
        { name: "GitHub Actions", highlight: true },
        { name: "CI/CD" },
        { name: "Docker", highlight: true },
        { name: "Kubernetes" },
        { name: "OIDC" },
      ],
    },
    {
      title: "Monitoreo",
      icon: <Monitor className="w-5 h-5 text-purple-500" />,
      description: "Observabilidad y monitoreo de aplicaciones y sistemas.",
      accentBorder: "hover:border-purple-500/40",
      badgeColor: "border-purple-500/20 text-purple-700 dark:text-purple-300 bg-purple-500/5",
      skills: [
        { name: "CloudWatch" },
        { name: "Grafana" },
      ],
    },
    {
      title: "Herramientas de Ingeniería",
      icon: <Wrench className="w-5 h-5 text-amber-500" />,
      description: "Control de versiones, pruebas y flujo de desarrollo diario.",
      accentBorder: "hover:border-amber-500/40",
      badgeColor: "border-amber-500/20 text-amber-700 dark:text-amber-300 bg-amber-500/5",
      skills: [
        { name: "Git", highlight: true },
        { name: "GitHub" },
        { name: "Postman" },
        { name: "LaTeX" },
      ],
    },
    {
      title: "Idiomas",
      icon: <Languages className="w-5 h-5 text-rose-500" />,
      description: "Comunicación profesional en distintos contextos.",
      accentBorder: "hover:border-rose-500/40",
      badgeColor: "border-rose-500/20 text-rose-700 dark:text-rose-300 bg-rose-500/5",
      skills: [
        { name: "Español (nativo)", highlight: true },
        { name: "Inglés (básico)" },
      ],
    },
  ];

  const filteredCategories = skillCategories
    .map((category) => {
      const filteredSkills = category.skills.filter((skill) =>
        skill.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return {
        ...category,
        skills: filteredSkills,
      };
    })
    .filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-12 border-t border-border/50">
      <div className="space-y-4 text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
          <Terminal className="w-3.5 h-3.5" />
          <span>Competencias</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Habilidades Técnicas y Tecnologías
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Herramientas y tecnologías descritas en el CV: frontend, backend, DevOps y cloud sobre AWS,
          monitoreo, herramientas e idiomas.
        </p>

        {/* Interactive Search Bar */}
        <div className="relative max-w-md mx-auto pt-2">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
          <Input
            type="text"
            placeholder="Filtrar tecnología (ej. Angular, Python, Docker)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9 pr-4 h-10 text-sm bg-card/80 border-border/70 rounded-full focus-visible:ring-primary shadow-xs"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCategories.map((category, index) => (
          <Card
            key={index}
            className={`border-border/70 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${category.accentBorder}`}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2.5 text-base font-bold text-foreground">
                <div className="p-2 rounded-lg bg-background border border-border/80 shadow-xs">
                  {category.icon}
                </div>
                <span>{category.title}</span>
              </CardTitle>
              <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                {category.description}
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant={skill.highlight ? "default" : "secondary"}
                    className={`text-xs font-mono transition-transform hover:scale-105 ${
                      skill.highlight
                        ? "shadow-xs font-semibold"
                        : "bg-muted text-foreground/80 hover:bg-muted/80"
                    }`}
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p>No se encontraron tecnologías que coincidan con "{searchTerm}".</p>
        </div>
      )}
    </section>
  );
}