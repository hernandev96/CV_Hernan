import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Send,
} from "lucide-react";

export function Contact() {
  return (
    <div className="mb-8">
      <h2 className="mb-6">Contacto</h2>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Información de contacto */}
        <Card>
          <CardHeader>
            <CardTitle>Información de Contacto</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">
                  dominguezgonzalezhectorhernan@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Teléfono</p>
                <p className="text-muted-foreground">+52 595 957 1482</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Ubicación</p>
                <p className="text-muted-foreground">
                  Tezoyuca, Estado de México
                </p>
              </div>
            </div>

            <div className="pt-4">
              <p className="font-medium mb-3">Redes Sociales</p>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/hector-hernan-dominguez-gonzalez-25bb611b4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                </a>
                <a
                  href="https://github.com/hernandev96"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </Button>
                </a>
              </div>
            </div>

            <div className="pt-4">
              <p className="font-medium mb-3">Disponibilidad</p>
              <div className="flex gap-2">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-800"
                >
                  ✓ Disponible para proyectos
                </Badge>
                <Badge variant="outline">Remoto / Presencial</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
