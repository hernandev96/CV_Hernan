import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const email = "dominguezgonzalezhectorhernan@gmail.com";
  const phone = "+52 59 5957 1482";
  const phoneClean = "525959571482";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    toast.success("Email copiado al portapapeles", {
      description: email,
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Por favor completa los campos requeridos");
      return;
    }

    setIsSubmitting(true);

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      formData.subject || `Contacto de ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hola Héctor,\n\nMi nombre es ${formData.name} (${formData.email}).\n\n${formData.message}`
    )}`;

    window.open(mailtoUrl, "_blank");

    toast.success("¡Mensaje preparado!", {
      description: "Se ha abierto tu cliente de correo electrónico para enviar el mensaje.",
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-12 border-t border-border/50">
      <div className="space-y-4 text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Contacto</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
          ¿Tienes un proyecto en mente o buscas sumar talento?
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
          Estoy disponible para oportunidades a tiempo completo, proyectos freelance y
          colaboraciones técnicas. ¡Hablemos!
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 items-start">
        {/* Left column: Direct channels & social cards */}
        <div className="lg:col-span-5 space-y-4">
          <Card className="border-border/70 bg-card/60 backdrop-blur-sm shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-bold">
                Canales de Comunicación
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Email Card with Copy button */}
              <div className="p-3.5 rounded-xl bg-background border border-border/70 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground font-medium">
                      Correo Electrónico
                    </p>
                    <p className="text-xs sm:text-sm font-semibold truncate text-foreground">
                      {email}
                    </p>
                  </div>
                </div>

                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleCopyEmail}
                  className="shrink-0 gap-1.5 text-xs h-8"
                  title="Copiar correo"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="hidden sm:inline text-emerald-500">Copiado</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">Copiar</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="p-3.5 rounded-xl bg-background border border-border/70 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0 text-emerald-600 dark:text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">
                      Teléfono / WhatsApp
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-foreground">
                      {phone}
                    </p>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="shrink-0 gap-1 text-xs h-8"
                  >
                    <span>WhatsApp</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </Button>
                </a>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-background border border-border/70 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center shrink-0 text-indigo-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium">
                    Ubicación
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-foreground">
                    Tezoyuca, Estado de México
                  </p>
                </div>
              </div>

              {/* Social links */}
              <div className="pt-2 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Perfiles Profesionales:
                </p>
                <div className="flex gap-2">
                  <a
                    href="https://linkedin.com/in/hector-hernan-dominguez-gonzalez-25bb611b4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full gap-2 text-xs"
                    >
                      <Linkedin className="w-4 h-4 text-blue-600" />
                      <span>LinkedIn</span>
                    </Button>
                  </a>

                  <a
                    href="https://github.com/hernandev96"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full gap-2 text-xs"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </Button>
                  </a>
                </div>
              </div>

              {/* Status pill */}
              <div className="pt-3 border-t border-border/60">
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-200 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
                    <span>Disponibilidad Inmediata</span>
                  </div>
                  <p className="text-muted-foreground text-[11px] leading-relaxed">
                    Modalidad Remoto, Híbrido o Presencial (CDMX / Edo. Méx).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column: Interactive Form */}
        <div className="lg:col-span-7">
          <Card className="border-border/70 bg-card/60 backdrop-blur-sm shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-bold">
                Envíame un Mensaje Directo
              </CardTitle>
              <p className="text-xs text-muted-foreground">
                Completa este formulario y se abrirá tu cliente de correo con los datos
                estructurados listos para enviar.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Tu Nombre <span className="text-primary">*</span>
                    </label>
                    <Input
                      placeholder="Ej. Juan Pérez"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="text-sm bg-background/80"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground">
                      Tu Correo <span className="text-primary">*</span>
                    </label>
                    <Input
                      type="email"
                      placeholder="ejemplo@empresa.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="text-sm bg-background/80"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Asunto
                  </label>
                  <Input
                    placeholder="Oportunidad laboral / Proyecto / Consulta"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="text-sm bg-background/80"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-foreground">
                    Mensaje <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    placeholder="Cuéntame sobre la propuesta, el proyecto o el rol..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="text-sm bg-background/80 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gap-2 shadow-sm font-semibold"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensaje</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
