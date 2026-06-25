import type { Metadata } from "next";

import { UseCases } from "@/components/use-cases";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";

export const metadata: Metadata = {
  title: "Casos de uso — NAXO",
  description:
    "Gestión de almacenes, automatización de facturas, apps móviles, sistemas de reservas, dashboards y portales de clientes a medida.",
};

export default function CasosPage() {
  return (
    <div className="pt-16 md:pt-20">
      <UseCases />
      <Testimonials />
      <CTA />
    </div>
  );
}
