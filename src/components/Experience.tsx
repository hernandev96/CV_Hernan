import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Auditor del sistema informatico PREP IEEPCO",
      company: "Universidad Autonoma Metropolitana Unidad Iztapalapa (UAM-I)",
      location: "CDMX,México",
      period: "2022 ",
      description:
        "Lidero el desarrollo de aplicaciones web escalables utilizando React y Node.js. Implemento arquitecturas microservicios y optimizo el rendimiento de las aplicaciones.",
      technologies: ["Node.js", "Jasmine"],
    },
    {
      title: "Full Stack Developer",
      company: "Hospital Infantil de México Federico Goméz",
      location: "CDMX,México",
      period: "2025 - Actualidad",
      description:
        "Desarrollo de sistema de inventario para el hospital infantil de mexico federico gomez utilizando Angular 19, Node.js y TypeScript, además de trabajar en el desarrollo de un API restful usando Python y Django.",
      technologies: [
        "Angular",
        "Python",
        "Django",
        "Node.js",
        "TypeScript",
        "Git",
        "HTML",
        "CSS",
        "Github",
      ],
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="mb-6">Experiencia Profesional</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                <div>
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
