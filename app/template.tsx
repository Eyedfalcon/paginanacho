"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Transición de entrada entre páginas: Next remonta el template en cada
 * navegación, así que cada ruta entra con fundido, desplazamiento y desenfoque.
 */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.main
      className="relative overflow-x-clip"
      initial={{ opacity: 0, y: 32, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.main>
  );
}
