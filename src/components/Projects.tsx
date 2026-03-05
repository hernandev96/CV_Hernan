import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "ECommerce Platform",
      description: "Plataforma de comercio electrónico completa con panel de administración, gestión de inventario, procesamiento de pagos y análisis de ventas en tiempo real.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      date: "2023",
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/user/ecommerce",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones push y integración con calendarios externos.",
      technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "Docker"],
      date: "2023",
      liveUrl: "https://taskapp-demo.com",
      githubUrl: "https://github.com/user/taskapp",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard meteorológico con visualización de datos, pronósticos detallados y alertas personalizables basado en APIs externas.",
      technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind"],
      date: "2022",
      liveUrl: "https://weather-dashboard-demo.com",
      githubUrl: "https://github.com/user/weather-dashboard",
      featured: false
    },
    {
      title: "Blog CMS",
      description: "Sistema de gestión de contenidos para blogs con editor de texto enriquecido, sistema de comentarios y optimización SEO.",
      technologies: ["Next.js", "Prisma", "MySQL", "NextAuth.js"],
      date: "2022",
      liveUrl: "https://blog-cms-demo.com",
      githubUrl: "https://github.com/user/blog-cms",
      featured: false
    },
    {
      title: "Cryptocurrency Tracker",
      description: "Aplicación para seguimiento de criptomonedas con gráficos interactivos, alertas de precio y portfolio personal.",
      technologies: ["Angular", "TypeScript", "Firebase", "CoinGecko API"],
      date: "2021",
      liveUrl: "https://crypto-tracker-demo.com",
      githubUrl: "https://github.com/user/crypto-tracker",
      featured: false
    },
    {
      title: "Social Media Analytics",
      description: "Herramienta de análisis para redes sociales con métricas detalladas, reportes automáticos y dashboard ejecutivo.",
      technologies: ["Python", "Django", "React", "D3.js", "PostgreSQL"],
      date: "2021",
      liveUrl: "https://social-analytics-demo.com",
      githubUrl: "https://github.com/user/social-analytics",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="mb-8">
      <h2 className="mb-6">Proyectos Destacados</h2>
      
      {/* Proyectos Destacados */}
      <div className="grid gap-6 md:grid-cols-2 mb-8">
        {featuredProjects.map((project, index) => (
          <Card key={index} className="border-2 border-primary/20">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>
                <Badge variant="secondary">Destacado</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" className="flex items-center gap-1">
                  <ExternalLink className="w-4 h-4" />
                  Ver Demo
                </Button>
                <Button size="sm" variant="outline" className="flex items-center gap-1">
                  <Github className="w-4 h-4" />
                  Código
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Otros Proyectos */}
      <h3 className="mb-4">Otros Proyectos</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project, index) => (
          <Card key={index} className="h-fit">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{project.date}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="secondary" className="text-xs">
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex items-center gap-1 text-xs h-8">
                  <ExternalLink className="w-3 h-3" />
                  Demo
                </Button>
                <Button size="sm" variant="outline" className="flex items-center gap-1 text-xs h-8">
                  <Github className="w-3 h-3" />
                  Código
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}