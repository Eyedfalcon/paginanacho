import type { Metadata } from "next";

import { Technologies } from "@/components/technologies";
import { CTA } from "@/components/cta";

export const metadata: Metadata = {
  title: "Tecnologías — NAXO",
  description:
    "Stack tecnológico de NAXO: .NET, C#, React, Next.js, TypeScript, Node.js, PostgreSQL, SQL Server, Supabase, Docker, OpenAI, Claude y AWS.",
};

export default function TecnologiasPage() {
  return (
    <div className="pt-16 md:pt-20">
      <Technologies />
      <CTA />
    </div>
  );
}
