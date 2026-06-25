import Image from "next/image";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

const socials = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:hola@naxo.dev",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/59164914295",
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="container py-14">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo-full.png"
              alt="NAXO"
              width={800}
              height={182}
              className="h-8 w-auto"
            />
            <p className="mt-3 text-sm text-muted">
              Transformamos procesos complejos en software simple.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-muted transition-all duration-300 hover:border-primary/40 hover:text-beige"
              >
                <social.icon className="h-4.5 w-4.5" size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="hairline my-8" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted md:flex-row">
          <p>© {new Date().getFullYear()} NAXO. Todos los derechos reservados.</p>
          <p>Desarrollo de software · IA · Automatización empresarial</p>
        </div>
      </div>
    </footer>
  );
}
