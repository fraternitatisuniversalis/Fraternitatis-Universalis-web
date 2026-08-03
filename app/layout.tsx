import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fraternitatis Universalis",
  description:
    "Sitio oficial de la Respetable Logia Simbólica Ouroboros et Lucis Filli No. 433."
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
