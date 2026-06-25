"use client";

import Image from "next/image";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/reveal";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Analizamos tu negocio",
    description:
      "Estudiamos tus procesos, sistemas actuales y objetivos para detectar dónde el software aporta más valor.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80&auto=format&fit=crop",
    alt: "Dashboard de analítica con gráficos de negocio",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Diseñamos la solución",
    description:
      "Definimos arquitectura, alcance y experiencia de usuario con prototipos que validas antes de escribir código.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80&auto=format&fit=crop",
    alt: "Herramientas de diseño UX y wireframes sobre mesa",
  },
  {
    icon: Code2,
    number: "03",
    title: "Desarrollamos",
    description:
      "Sprints cortos con entregas frecuentes: ves el avance real cada semana, sin sorpresas al final.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80&auto=format&fit=crop",
    alt: "Código fuente en pantalla de monitor",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Implementamos y damos soporte",
    description:
      "Despliegue, formación a tu equipo y soporte evolutivo para que el software crezca contigo.",
    image:
      "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=600&q=80&auto=format&fit=crop",
    alt: "Lanzamiento y despliegue de tecnología",
  },
];

/* Vertical offset: steps 1&3 arriba, 2&4 abajo — imita el efecto de ola de la referencia */
const offsets = ["md:mt-0", "md:mt-16", "md:mt-0", "md:mt-16"];

export function Process() {
  return (
    <section id="proceso" className="relative py-24 md:py-32">
      <div className="glow-burgundy pointer-events-none absolute left-0 top-1/3 h-[400px] w-[500px] opacity-40" />

      <div className="container relative">
        <SectionHeading
          eyebrow="Proceso de trabajo"
          title={
            <>
              Un método claro,{" "}
              <span className="font-serif italic text-beige">
                de principio a fin
              </span>
            </>
          }
          description="Cuatro fases con entregables concretos. Siempre sabes en qué punto está tu proyecto y qué viene después."
        />

        {/* Grid + SVG conector */}
        <div className="relative mt-4 pb-8">
          {/* Línea ondulada que conecta los 4 pasos — solo desktop */}
          <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-64 md:block">
            <svg
              viewBox="0 0 1000 260"
              preserveAspectRatio="none"
              className="h-full w-full"
            >
              {/* Camino ondulado entre los centros de las 4 columnas */}
              <path
                d="M 125 130 C 210 220, 290 220, 375 194 C 460 168, 540 66, 625 130 C 710 194, 790 220, 875 194"
                fill="none"
                stroke="rgba(109,16,40,0.35)"
                strokeWidth="1.5"
                strokeDasharray="7 5"
              />
              {/* Nodos en cada paso */}
              {[
                { cx: 125, cy: 130 },
                { cx: 375, cy: 194 },
                { cx: 625, cy: 130 },
                { cx: 875, cy: 194 },
              ].map((pt) => (
                <g key={pt.cx}>
                  <circle
                    cx={pt.cx}
                    cy={pt.cy}
                    r="8"
                    fill="rgba(109,16,40,0.25)"
                    stroke="rgba(109,16,40,0.6)"
                    strokeWidth="1.5"
                  />
                  <circle cx={pt.cx} cy={pt.cy} r="3" fill="#8B1735" />
                </g>
              ))}
            </svg>
          </div>

          <div className="grid gap-8 md:grid-cols-4 md:gap-5">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.12}>
                <div className={`flex flex-col ${offsets[i]}`}>
                  {/* Imagen ilustración */}
                  <div className="relative h-52 overflow-hidden rounded-2xl bg-[#0c0308]">
                    <Image
                      src={step.image}
                      alt={step.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover opacity-55 transition-all duration-700"
                      style={{
                        filter: "grayscale(35%) contrast(1.1) saturate(0.7)",
                      }}
                    />
                    {/* Overlay oscuro con toque guindo suave */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/75" />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />

                    {/* Malla de puntos */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "radial-gradient(rgba(216,199,161,0.5) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />

                    {/* Icono top-left */}
                    <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm">
                      <step.icon className="h-4 w-4 text-beige" />
                    </div>
                  </div>

                  {/* Número grande */}
                  <span className="mt-5 font-serif text-5xl italic leading-none text-white/10">
                    {step.number}
                  </span>

                  {/* Título */}
                  <h3 className="mt-2 text-sm font-semibold leading-snug text-foreground">
                    {step.title}
                  </h3>

                  {/* Descripción */}
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
