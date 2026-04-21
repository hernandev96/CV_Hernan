import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Download, MapPin, Mail, Phone } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <Card className="p-8 mb-8 bg-gradient-to-r from-primary/5 to-accent/30 relative">
      {/* Theme Toggle en la esquina superior derecha */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6">
        <Avatar className="w-32 h-32 border-4 border-primary/20">
          <AvatarImage src="/images/perfil_cv.png" alt="Foto de perfil" />
          <AvatarFallback>AP</AvatarFallback>
        </Avatar>

        <div className="flex-1 text-center md:text-left">
          <h1 className="mb-2">Héctor Hernán Domínguez González</h1>
          <h2 className="text-primary mb-4">Desarrollador Full Stack</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl">
            Desarrollador web, con gran interés en acceder al mercado laboral
            para poner en práctica mis conocimientos. Soy una persona
            trabajadora, comunicativa y comprometida. Desearía encontrar una
            oportunidad para adquirir más experiencia profesional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Estado de México, México</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>dominguezgonzalezhectorherhan@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+52 595 957 1482</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href="/Hector_Hernan_Dominguez_Gonzalez.pdf"
            download="Hector_Hernan_Dominguez_Gonzalez_CV.pdf"
          >
            <Button className="flex items-center gap-2" type="">
              <Download className="w-4 h-4" />
              Descargar CV
            </Button>
          </a>
        </div>
      </div>
    </Card>
  );
}
