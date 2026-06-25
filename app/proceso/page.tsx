import type { Metadata } from "next";

import { Process } from "@/components/process";
import { Benefits } from "@/components/benefits";
import { CTA } from "@/components/cta";

export const metadata: Metadata = {
  title: "Proceso de trabajo — NAXO",
  description:
    "Nuestro método en cuatro fases: análisis del negocio, diseño de la solución, desarrollo iterativo e implantación con soporte continuo.",
};

export default function ProcesoPage() {
  return (
    <div className="pt-16 md:pt-20">
      <Process />
      <Benefits />
      <CTA />
    </div>
  );
}
