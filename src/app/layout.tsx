import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parabolic lab",
  description: "Aplicacion de soporte para el aprendizaje de tiro parabólico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="winter">
      <body>{children}</body>
    </html>
  );
}
