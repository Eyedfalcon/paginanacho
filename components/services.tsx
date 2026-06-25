"use client";

import Image from "next/image";
import {
  Globe,
  Smartphone,
  Bot,
  Network,
  Puzzle,
  LineChart,
  Code2,
  Zap,
  Settings2,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

import { Reveal, SectionHeading } from "@/components/reveal";

const services = [
  {
    icon: Globe,
    title: "Desarrollo Web",
    description:
      "Aplicaciones modernas y escalables con arquitecturas pensadas para crecer con tu negocio.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80&auto=format&fit=crop",
    alt: "Servidores en rack de datacenter con luces azules",
  },
  {
    icon: Smartphone,
    title: "Aplicaciones Móviles",
    description:
      "Apps nativas y multiplataforma para iOS y Android con experiencia de usuario impecable.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&q=80&auto=format&fit=crop",
    alt: "Smartphone con aplicación móvil moderna",
  },
  {
    icon: Bot,
    title: "Automatización con IA",
    description:
      "Agentes IA, ChatGPT, Claude y procesos inteligentes que trabajan por ti las 24 horas.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=700&q=80&auto=format&fit=crop",
    alt: "Red neuronal y cerebro digital representando inteligencia artificial",
  },
  {
    icon: Network,
    title: "Integraciones Empresariales",
    description:
      "ERP, Sage X3, SAP, APIs REST, GraphQL y SOAP. Conectamos todos tus sistemas entre sí.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80&auto=format&fit=crop",
    alt: "Placa de circuito electrónico con conexiones y chips",
  },
  {
    icon: Puzzle,
    title: "Software a Medida",
    description:
      "Soluciones específicas diseñadas desde cero para los procesos reales de cada empresa.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=700&q=80&auto=format&fit=crop",
    alt: "Código fuente en pantalla de computadora",
  },
  {
    icon: LineChart,
    title: "Consultoría Tecnológica",
    description:
      "Análisis y optimización de procesos para decidir qué digitalizar, cómo y en qué orden.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80&auto=format&fit=crop",
    alt: "Dashboard empresarial con gráficos de analítica",
  },
];

const bottomTags = [
  { icon: Code2, label: "Web Development" },
  { icon: Zap, label: "Scalability" },
  { icon: Settings2, label: "Automation" },
  { icon: ShieldCheck, label: "Reliability" },
  { icon: TrendingUp, label: "Growth" },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-24 md:py-32">
      <div className="glow-burgundy pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 opacity-60" />

      <div className="container relative">
        <SectionHeading
          eyebrow="Servicios"
          title={
            <>
              Todo lo que tu empresa necesita,{" "}
              <span className="font-serif italic text-beige">
                en un solo equipo
              </span>
            </>
          }
          description="Del análisis inicial al soporte continuo: cubrimos el ciclo completo del software empresarial."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <article className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:border-white/15 hover:shadow-[0_8px_40px_rgba(109,16,40,0.3)]">
                {/* Illustration header */}
                <div className="relative h-52 shrink-0 overflow-hidden bg-[#0d0408]">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-70"
                    style={{ filter: "grayscale(40%) contrast(1.1) saturate(0.6)" }}
                  />

                  {/* Subtle dark overlay — barely a hint of guindo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/30 to-black/70" />
                  <div className="absolute inset-0 bg-primary/8 mix-blend-multiply" />

                  {/* Bottom fade into card */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-card to-transparent" />

                  {/* Dot grid texture */}
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(216,199,161,0.4) 1px, transparent 1px)",
                      backgroundSize: "22px 22px",
                    }}
                  />

                  {/* Icon badge top-left */}
                  <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm">
                    <service.icon className="h-5 w-5 text-beige" />
                  </div>
                </div>

                {/* Text content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom tech tag strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-border pt-10">
          {bottomTags.map((tag, i) => (
            <div
              key={tag.label}
              className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted/60"
            >
              <tag.icon className="h-3.5 w-3.5 text-primary/70" />
              {tag.label}
              {i < bottomTags.length - 1 && (
                <span className="ml-8 hidden h-1 w-1 rounded-full bg-muted/30 sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
