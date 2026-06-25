import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function CTA() {
  return (
    <section id="contacto" className="relative py-24 md:py-32">
      <div className="container">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center md:px-16 md:py-24">
            {/* Iluminación interior del panel */}
            <div className="glow-burgundy pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[700px] -translate-x-1/2" />
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(216,199,161,0.12) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                ¿Listo para{" "}
                <span className="font-serif italic text-beige">
                  digitalizar tu empresa?
                </span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
                Convirtamos tus procesos en software que ahorre tiempo, reduzca
                costes y genere resultados.
              </p>
              <div className="mt-10">
                <a href="mailto:hola@naxo.dev?subject=Solicitud%20de%20presupuesto">
                  <Button size="lg">
                    Solicitar presupuesto
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>
              <p className="mt-6 text-xs text-muted">
                Respuesta en menos de 24h · Primera consultoría sin coste
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
