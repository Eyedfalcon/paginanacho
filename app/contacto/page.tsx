import type { Metadata } from "next";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/reveal";
import { CTA } from "@/components/cta";

export const metadata: Metadata = {
  title: "Contacto — NAXO",
  description:
    "Solicita un presupuesto para tu proyecto de software, automatización con IA o integración empresarial. Respuesta en menos de 24 horas.",
};

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "hola@naxo.dev",
    href: "mailto:hola@naxo.dev",
    note: "Para propuestas y presupuestos",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+591 64914295",
    href: "https://wa.me/59164914295",
    note: "Respuesta rápida en horario laboral",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "NAXO",
    href: "https://www.linkedin.com",
    note: "Conecta con el equipo",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@naxo",
    href: "https://github.com",
    note: "Nuestro código abierto",
  },
];

export default function ContactoPage() {
  return (
    <div className="pt-16 md:pt-20">
      <section className="relative py-24 md:py-32">
        <div className="glow-burgundy pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 opacity-60" />

        <div className="container relative">
          <SectionHeading
            eyebrow="Contacto"
            title={
              <>
                Hablemos de{" "}
                <span className="font-serif italic text-beige">
                  tu proyecto
                </span>
              </>
            }
            description="Cuéntanos qué necesitas y te responderemos en menos de 24 horas con los siguientes pasos."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel, i) => (
              <Reveal key={channel.label} delay={i * 0.08}>
                <a
                  href={channel.href}
                  target={
                    channel.href.startsWith("http") ? "_blank" : undefined
                  }
                  rel="noopener noreferrer"
                  className="glass group block h-full rounded-3xl p-6 transition-all duration-500 hover:border-primary/40 hover:bg-white/[0.05]"
                >
                  <div className="glass flex h-11 w-11 items-center justify-center rounded-2xl transition-colors duration-500 group-hover:border-beige/30">
                    <channel.icon className="h-5 w-5 text-beige" />
                  </div>
                  <p className="mt-5 text-sm font-semibold text-foreground">
                    {channel.label}
                  </p>
                  <p className="mt-1 text-sm text-beige/80">{channel.value}</p>
                  <p className="mt-2 text-xs text-muted">{channel.note}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
