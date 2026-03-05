import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Database, Cloud, Wrench } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      skills: [
        "JavaScript",
        "TypeScript",
        "Next.js",
        "Angular",
        "Tailwind CSS",
        "CSS",
        "HTML",
        "Bootstrap",
        "AJAX",
        "JQuery",
      ],
      bgColor:
        "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800",
    },
    {
      title: "Backend",
      icon: <Database className="w-5 h-5 text-green-600 dark:text-green-400" />,
      skills: [
        "Node.js",
        "Express",
        "Python",
        "Django",
        "Java",
        "Spring Boot",
        "PHP",
      ],
      bgColor:
        "bg-green-50 dark:bg-green-950/30 border-green-200 dark:border-green-800",
    },
    {
      title: "Base de Datos",
      icon: (
        <Database className="w-5 h-5 text-purple-600 dark:text-purple-400" />
      ),
      skills: ["MongoDB", "MySQL"],
      bgColor:
        "bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800",
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      skills: ["Docker", "GitHub Actions", "Terraform"],
      bgColor:
        "bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800",
    },
    {
      title: "Herramientas",
      icon: <Wrench className="w-5 h-5 text-slate-600 dark:text-slate-400" />,
      skills: [
        "Git",
        "VS Code",
        "Figma",
        "Postman",
        "Jira",
        "Linux",
        "Insomnia",
        "Nvim",
        "Línea de comandos",
      ],
      bgColor:
        "bg-slate-50 dark:bg-slate-950/30 border-slate-200 dark:border-slate-800",
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="mb-6">Habilidades Técnicas</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className={`h-fit transition-all duration-300 hover:shadow-lg ${category.bgColor}`}
          >
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                {category.icon}
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="transition-colors"
                  >
                    {skill}
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
