import { Hero } from "@/components/hero";
import { Benefits } from "@/components/benefits";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <Testimonials />
      <CTA />
    </>
  );
}
