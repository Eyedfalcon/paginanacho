import { SectionHeading } from "@/components/reveal";

const rowA = [
  ".NET",
  "C#",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
];
const rowB = [
  "SQL Server",
  "Supabase",
  "Docker",
  "OpenAI",
  "Claude",
  "AWS",
  "GraphQL",
];

function Badge({ name }: { name: string }) {
  return (
    <span className="glass inline-flex shrink-0 items-center gap-2.5 rounded-full px-6 py-3 text-sm font-medium text-foreground/85 transition-colors hover:border-beige/30 hover:text-foreground">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {name}
    </span>
  );
}

function MarqueeRow({ items, reverse }: { items: string[]; reverse?: boolean }) {
  // Duplicado para que el bucle del marquee sea continuo
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div
        className={`flex gap-3 pr-3 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((name, i) => (
          <Badge key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  );
}

export function Technologies() {
  return (
    <section id="tecnologias" className="relative py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Tecnologías"
          title={
            <>
              Construido con el{" "}
              <span className="font-serif italic text-beige">
                stack adecuado
              </span>
            </>
          }
          description="Elegimos cada tecnología por solidez, rendimiento y mantenibilidad a largo plazo. Nada de modas pasajeras."
        />
      </div>

      <div className="space-y-4">
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
      </div>
    </section>
  );
}
