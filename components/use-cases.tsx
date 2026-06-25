import Image from "next/image";

import { Reveal, SectionHeading } from "@/components/reveal";

const cases = [
  {
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80&auto=format&fit=crop",
    alt: "Almacén con estanterías industriales y carretilla elevadora",
    title: "Gestión de almacenes",
    description:
      "Control de stock en tiempo real, ubicaciones, picking y trazabilidad completa conectada al ERP.",
    tags: ["Logística", "ERP", "Tiempo real"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700&q=80&auto=format&fit=crop",
    alt: "Documentos de facturación y procesamiento automatizado",
    title: "Automatización de facturas",
    description:
      "Lectura inteligente de documentos con IA, validación contable y registro automático sin intervención manual.",
    tags: ["IA", "OCR", "Contabilidad"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=700&q=80&auto=format&fit=crop",
    alt: "App de fitness con seguimiento de rutinas en dispositivo móvil",
    title: "Aplicación Fitness",
    description:
      "App móvil con rutinas personalizadas, seguimiento de progreso y pasarela de pagos para suscripciones.",
    tags: ["iOS", "Android", "Suscripciones"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=700&q=80&auto=format&fit=crop",
    alt: "Sistema de reservas online con calendario de disponibilidad",
    title: "Sistema de reservas",
    description:
      "Reservas online con disponibilidad en vivo, recordatorios automáticos y cobro anticipado integrado.",
    tags: ["Web", "Pagos", "Notificaciones"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80&auto=format&fit=crop",
    alt: "Dashboard empresarial con gráficos de analítica de negocio",
    title: "Dashboard empresarial",
    description:
      "Todos los indicadores del negocio unificados en un panel: ventas, producción, finanzas y operaciones.",
    tags: ["BI", "KPIs", "Integraciones"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=700&q=80&auto=format&fit=crop",
    alt: "Portal digital de autoservicio para clientes empresariales",
    title: "Portal de clientes",
    description:
      "Área privada donde tus clientes consultan pedidos, descargan documentos y abren incidencias 24/7.",
    tags: ["B2B", "Autoservicio", "API"],
  },
];

export function UseCases() {
  return (
    <section id="casos" className="relative py-24 md:py-32">
      <div className="glow-beige pointer-events-none absolute right-0 top-32 h-[400px] w-[500px]" />

      <div className="container relative">
        <SectionHeading
          eyebrow="Casos de uso"
          title={
            <>
              Soluciones reales para{" "}
              <span className="font-serif italic text-beige">
                problemas reales
              </span>
            </>
          }
          description="Una muestra del tipo de proyectos que diseñamos, construimos y mantenemos para nuestros clientes."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((useCase, i) => (
            <Reveal key={useCase.title} delay={i * 0.08}>
              <article className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-500 hover:border-white/15 hover:shadow-[0_8px_40px_rgba(109,16,40,0.25)]">
                {/* Imagen ilustrada con overlay oscuro estilo referencia */}
                <div className="relative h-52 shrink-0 overflow-hidden bg-[#100508]">
                  <Image
                    src={useCase.image}
                    alt={useCase.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover opacity-55 transition-all duration-700 group-hover:scale-105 group-hover:opacity-65"
                    style={{ filter: "grayscale(30%) contrast(1.1)" }}
                  />

                  {/* Overlay guindo: da el tono oscuro-rojo del fondo de referencia */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-black/30 to-black/70" />

                  {/* Degradado inferior hacia el cuerpo de la tarjeta */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-card to-transparent" />

                  {/* Malla de puntos suave encima de la imagen */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(216,199,161,0.3) 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />

                  {/* Badge superior-derecha con el primer tag */}
                  <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] font-medium text-white/70 backdrop-blur-sm">
                    {useCase.tags[0]}
                  </span>
                </div>

                {/* Contenido inferior */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-semibold text-foreground">
                    {useCase.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                    {useCase.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {useCase.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-white/[0.04] px-2.5 py-1 text-[11px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
