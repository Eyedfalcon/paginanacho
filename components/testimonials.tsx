import { Quote } from "lucide-react";

import { Reveal, SectionHeading } from "@/components/reveal";

const testimonials = [
  {
    quote:
      "Automatizaron toda nuestra gestión de facturas con IA. Lo que antes ocupaba a dos personas a jornada completa ahora se resuelve solo, sin errores.",
    name: "Laura Méndez",
    role: "Directora Financiera",
    company: "Grupo logístico · 120 empleados",
    initials: "LM",
  },
  {
    quote:
      "La integración con Sage X3 fue impecable. Por fin tenemos almacén, ventas y contabilidad hablando entre sí en tiempo real. El nivel técnico del equipo es de otro nivel.",
    name: "Carlos Ibáñez",
    role: "Director de Operaciones",
    company: "Distribuidora industrial",
    initials: "CI",
  },
  {
    quote:
      "Nos entregaron el portal de clientes en plazo y con una calidad que no esperábamos por ese presupuesto. Las incidencias por teléfono han caído un 70%.",
    name: "Marta Rovira",
    role: "CEO",
    company: "Servicios B2B · SaaS",
    initials: "MR",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="glow-beige pointer-events-none absolute left-1/2 top-0 h-[300px] w-[700px] -translate-x-1/2" />

      <div className="container relative">
        <SectionHeading
          eyebrow="Testimonios"
          title={
            <>
              Empresas que ya{" "}
              <span className="font-serif italic text-beige">
                confían en NAXO
              </span>
            </>
          }
        />

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Reveal key={testimonial.name} delay={i * 0.12}>
              <figure className="glass flex h-full flex-col rounded-3xl p-7 transition-all duration-500 hover:border-beige/25 hover:bg-white/[0.05]">
                <Quote className="h-6 w-6 text-primary" />
                <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/85">
                  “{testimonial.quote}”
                </blockquote>
                <div className="hairline my-6" />
                <figcaption className="flex items-center gap-3.5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 bg-primary/20 text-xs font-semibold text-beige">
                    {testimonial.initials}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
