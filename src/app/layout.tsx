import { ReactNode } from "react";
import type { Metadata } from "next";
import "amvasdev-ui/dist/index.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parabolic lab",
  description: "Aplicacion de soporte para el aprendizaje de tiro parabólico",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
