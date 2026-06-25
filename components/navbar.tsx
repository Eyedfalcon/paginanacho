"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/servicios", label: "Servicios" },
  { href: "/casos", label: "Casos de uso" },
  { href: "/proceso", label: "Proceso" },
  { href: "/tecnologias", label: "Tecnologías" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú móvil al cambiar de ruta
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 md:px-7",
          scrolled
            ? "glass-strong mx-4 shadow-[0_8px_32px_rgba(0,0,0,0.45)] md:mx-auto"
            : "bg-transparent"
        )}
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-full.png"
            alt="NAXO"
            width={800}
            height={182}
            priority
            className="h-7 w-auto md:h-8"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm transition-colors hover:text-foreground",
                  active ? "text-beige" : "text-muted"
                )}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-1.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-beige to-transparent"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link href="/contacto">
            <Button size="sm">Solicitar presupuesto</Button>
          </Link>
        </div>

        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span
            className={cn(
              "h-px w-5 bg-foreground transition-transform",
              open && "translate-y-[3.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "h-px w-5 bg-foreground transition-transform",
              open && "-translate-y-[3.5px] -rotate-45"
            )}
          />
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-strong mx-4 mt-2 flex flex-col gap-1 rounded-2xl p-4 md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-white/5 hover:text-foreground",
                pathname === link.href ? "text-beige" : "text-muted"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contacto" className="mt-2">
            <Button className="w-full">Solicitar presupuesto</Button>
          </Link>
        </motion.nav>
      )}
    </motion.header>
  );
}
