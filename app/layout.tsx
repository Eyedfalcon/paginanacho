import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NAXO — Desarrollo de software a medida, IA y automatización",
  description:
    "Transformamos procesos complejos en software simple. Aplicaciones web y móviles, automatización con IA e integraciones ERP a medida para empresas que buscan crecer.",
  keywords: [
    "desarrollo de software a medida",
    "automatización con IA",
    "aplicaciones web",
    "aplicaciones móviles",
    "integraciones ERP",
    "Sage X3",
    "consultoría tecnológica",
  ],
  openGraph: {
    title: "NAXO — Desarrollo de software a medida, IA y automatización",
    description:
      "Transformamos procesos complejos en software simple. Soluciones empresariales, IA y automatización para empresas que buscan crecer.",
    type: "website",
    locale: "es_ES",
    siteName: "NAXO",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} ${instrument.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
