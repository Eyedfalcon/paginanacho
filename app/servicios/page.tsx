import type { Metadata } from "next";

import { Services } from "@/components/services";
import { CTA } from "@/components/cta";

export const metadata: Metadata = {
  title: "Servicios — NAXO",
  description:
    "Desarrollo web y móvil, automatización con IA, integraciones ERP, software a medida y consultoría tecnológica para empresas.",
};

export default function ServiciosPage() {
  return (
    <div className="pt-16 md:pt-20">
      <Services />
      <CTA />
    </div>
  );
}
