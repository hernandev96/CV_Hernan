import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Calendar, MapPin, Building } from "lucide-react";

export function Education() {
  const education = [
    {
      degree: "Licenciatura en computación",
      institution:
        "Universidad Autonoma Metropolitana Unidad Iztapalapa (UAM-I)",
      location: "Iztapalapa, Ciudad de México",
      period: "2015-2026",
      description:
        "Formación integral en programación, algoritmos, bases de datos y desarrollo de software.",
      grade: "Notable (8.0/10)",
    },
  ];

  const certifications = [
    {
      course: "Curso de Debugging con Chrome Devtools",
      institution: "Platzi",
      period: "2020",
      description:
        "En este curso aprendí a como debuggear una pagina web,así como a utilizar varias características de las herramientas de desarrollo que ofrece chrome,como por ejemplo auditar una pagina web,usar chrome como entorno de desarollo.",
    },
    {
      course: "Curso de ECMASCRIPT 6+",
      institution: "Platzi",
      period: "2020",
      description:
        "En este curso aprendí algunas de las novedades que trae ECMASCRIPT 6,7,8,9 y 10",
    },
    {
      course: "Curso definitivo de HTML y CSS",
      institution: "Platzi",
      period: "2020",
      description:
        "En este curso aprendí HTML5 y las ventajas que trae así como la implementación de buenas practicas en HTML y CSS",
    },
    {
      course: "Curso de Gestión de Dependencias y paquetes con NPM",
      institution: "Platzi",
      period: "2020",
      description:
        "El curso me enseño el manejo básico de npm,creación de un proyecto e instalación de dependencias de desarrollo para un proyecto",
    },
    {
      course: "Curso profesional de JavaScript",
      institution: "Platzi",
      period: "2020",
      description:
        "El curso me enseño distintas cosas que se usan de JS a nivel de desarrollador senior,una de las cosas importantes de este curso es como desarrollar plugins para un pagina web,un poco de como hacer que una pagina web sea una PWA,el manejo y uso de algunos patrones de desarrollo web como el singleton u observer",
    },
  ];

  return (
    <div className="mb-8">
      <h2 className="mb-6">Educación y Formación</h2>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Educación */}
        <div>
          <h3 className="mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            Formación Académica
          </h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <GraduationCap className="w-4 h-4" />
                      <span>{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">
                    {edu.description}
                  </p>
                  <Badge variant="secondary">{edu.grade}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certificaciones */}
        <div>
          <h3 className="mb-4 flex items-center gap-2">
            <Badge className="w-5 h-5 rounded-full p-1" />
            Cursos
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <Card key={index}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{cert.course}</CardTitle>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      <span>{cert.institution}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.period}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
