import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Building,
  Award,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Licenciatura en Computación",
      institution: "Universidad Autónoma Metropolitana Unidad Iztapalapa (UAM-I)",
      location: "Ciudad de México, México",
      period: "Egreso previsto: 2026",
      grade: "Egreso 2026",
      description:
        "Egreso de la Licenciatura en Computación en 2026 por la Universidad Autónoma Metropolitana Unidad Iztapalapa.",
      keyTopics: [],
    },
  ];

  return (
    <section id="education" className="py-12 border-t border-border/50">
      <div className="space-y-4 text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Formación</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          Educación
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Base académica en ciencias de la computación en la Universidad Autónoma Metropolitana
          Unidad Iztapalapa.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 items-start">
        {/* Formación Académica */}
        <div className="lg:col-span-12 space-y-4">
          <h3 className="text-lg font-bold flex items-center gap-2 text-foreground">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span>Formación Universitaria</span>
          </h3>

          {education.map((edu, index) => (
            <Card
              key={index}
              className="border-border/70 bg-card/60 backdrop-blur-sm shadow-md"
            >
              <CardHeader className="pb-3">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="text-lg font-bold">
                      {edu.degree}
                    </CardTitle>
                    <Badge className="bg-primary/10 text-primary border-primary/30 text-xs shrink-0">
                      {edu.grade}
                    </Badge>
                  </div>

                  <p className="text-sm font-medium text-foreground/90">
                    {edu.institution}
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground pt-1">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {edu.description}
                </p>

                {edu.keyTopics.length > 0 && (
                  <div className="space-y-2 pt-2 border-t border-border/50">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Áreas de conocimiento clave:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-foreground/90">
                      {edu.keyTopics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}