"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Cpu, Workflow } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GLSLHills } from "@/components/ui/glsl-hills";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.8, delay, ease },
});

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Fondo: shader de colinas + halos de luz */}
      <div className="absolute inset-0">
        <GLSLHills width="100%" height="100%" speed={0.35} color="#B59E73" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background" />
      <div className="glow-burgundy pointer-events-none absolute -top-40 left-1/2 h-[560px] w-[900px] -translate-x-1/2" />

      <div className="container relative z-10 flex min-h-screen flex-col justify-center pb-20 pt-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div {...fadeUp(0.1)}>
              <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-medium text-foreground/90">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Disponible para nuevos proyectos
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.25)}
              className="mt-7 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[4.25rem]"
            >
              Desarrollo de software{" "}
              <span className="font-serif italic text-beige">
                que impulsa tu negocio
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.4)}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            >
              Creamos aplicaciones web, móviles, sistemas empresariales,
              automatizaciones con IA e integraciones a medida para empresas
              que buscan crecer.
            </motion.p>

            <motion.div
              {...fadeUp(0.55)}
              className="mt-9 flex flex-col gap-4 sm:flex-row"
            >
              <Link href="/contacto">
                <Button size="lg" className="w-full sm:w-auto">
                  Solicitar presupuesto
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/casos">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Ver proyectos
                </Button>
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp(0.7)}
              className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted"
            >
              <span>Proyectos de 5K€ a 100K€</span>
              <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
              <span>Equipo senior dedicado</span>
              <span className="hidden h-1 w-1 rounded-full bg-border sm:block" />
              <span>Soporte y evolución continua</span>
            </motion.div>
          </div>

          {/* Visual derecho: panel de control flotante */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.6, ease }}
            className="relative hidden lg:block"
          >
            <div className="animate-float">
              <div className="glass-strong rounded-3xl p-6 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                    Panel operativo
                  </span>
                  <span className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span className="h-2 w-2 rounded-full bg-beige/50" />
                    <span className="h-2 w-2 rounded-full bg-white/20" />
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="glass rounded-2xl p-4">
                    <Workflow className="h-4 w-4 text-beige" />
                    <p className="mt-3 text-2xl font-semibold text-foreground">
                      1.248
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      Procesos automatizados / mes
                    </p>
                  </div>
                  <div className="glass rounded-2xl p-4">
                    <Bot className="h-4 w-4 text-beige" />
                    <p className="mt-3 text-2xl font-semibold text-foreground">
                      96,4%
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      Precisión de agentes IA
                    </p>
                  </div>
                </div>

                <div className="glass mt-4 rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs text-muted">
                      <Cpu className="h-3.5 w-3.5 text-beige" />
                      Integración ERP · Sage X3
                    </span>
                    <span className="text-xs text-emerald-400">Activa</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    {[88, 64, 76].map((value, i) => (
                      <div
                        key={i}
                        className="h-1.5 overflow-hidden rounded-full bg-white/5"
                      >
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-beige/70"
                          initial={{ width: 0 }}
                          animate={{ width: `${value}%` }}
                          transition={{
                            duration: 1.4,
                            delay: 1 + i * 0.2,
                            ease,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between rounded-2xl border border-primary/30 bg-primary/10 p-4">
                  <div>
                    <p className="text-xs text-muted">Ahorro estimado anual</p>
                    <p className="mt-0.5 text-lg font-semibold text-foreground">
                      42.300 €
                    </p>
                  </div>
                  <span className="rounded-full bg-primary/30 px-3 py-1 text-xs text-beige">
                    +31% YoY
                  </span>
                </div>
              </div>
            </div>

            {/* Resplandores detrás del panel */}
            <div className="glow-burgundy absolute -bottom-20 -left-16 -z-10 h-72 w-72" />
            <div className="glow-beige absolute -right-12 -top-16 -z-10 h-64 w-64" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
