"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

import { Reveal, SectionHeading } from "@/components/reveal";

const metrics = [
  {
    value: 78,
    prefix: "−",
    suffix: "%",
    label: "Tareas manuales",
    description: "Los procesos repetitivos pasan a ejecutarse solos.",
  },
  {
    value: 95,
    prefix: "−",
    suffix: "%",
    label: "Errores operativos",
    description: "Validaciones automáticas en cada paso del flujo.",
  },
  {
    value: 3,
    prefix: "×",
    suffix: "",
    label: "Mayor productividad",
    description: "Tu equipo se centra en lo que aporta valor real.",
  },
  {
    value: 24,
    prefix: "",
    suffix: "/7",
    label: "Control empresarial",
    description: "Visibilidad total del negocio en tiempo real.",
  },
];

function Counter({ to, prefix, suffix }: { to: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(to * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to]);

  return (
    <span ref={ref} className="text-gradient-beige text-5xl font-semibold tracking-tight md:text-6xl">
      {prefix}
      {value}
      {suffix}
    </span>
  );
}

export function Benefits() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Beneficios"
          title={
            <>
              Resultados que se notan{" "}
              <span className="font-serif italic text-beige">
                en la cuenta de resultados
              </span>
            </>
          }
          description="El software a medida no es un gasto: es la palanca que elimina fricción de toda tu operativa."
        />

        <div className="glass-strong rounded-[2rem] p-2">
          <div className="grid divide-y divide-border rounded-[1.75rem] border border-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative p-8 lg:p-10"
              >
                <Counter
                  to={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                />
                <p className="mt-4 text-sm font-medium text-foreground">
                  {metric.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {metric.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="mt-8 text-center">
          <p className="text-xs text-muted">
            Métricas medias observadas en proyectos de automatización e
            integración entregados a clientes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
