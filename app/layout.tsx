import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CTMGEO - Soluções em Geotecnologias | Sua Cidade Inteligente",
  description:
    "Soluções em geotecnologias para prefeituras municipais. SigWEB, recadastramento imobiliário, inovação fiscal e gestão urbana moderna com mais de 40 municípios atendidos.",
  keywords: [
    "CTMGEO",
    "Geotecnologia",
    "SigWEB",
    "Gestão Municipal",
    "Prefeituras",
    "Recadastramento Imobiliário",
    "Geoprocessamento",
    "Cascavel",
    "Cidade Inteligente",
  ],
  authors: [{ name: "CTMGEO" }],
  openGraph: {
    title: "CTMGEO - Soluções em Geotecnologias",
    description:
      "A maneira mais eficaz de aumentar a arrecadação do município! Confira nossos softwares e serviços.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
