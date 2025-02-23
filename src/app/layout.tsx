import "./globals.css";

import type { Metadata } from "next";

import { Montserrat, Oxanium } from "next/font/google";

export const metadata: Metadata = {
  title: "Invite Royale",
  description: "Aplicação de ranqueamento de convites",
};

const oxanium = Oxanium({
  subsets: ["latin"], // Biblioteca de caracteres
  weight: ["500", "600"], // Pesos da fonte
  variable: "--font-oxanium", // Variável CSS
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable} bg-gray-900 text-gray-100 bg-[url(/background.png)] bg-no-repeat bg-top md:bg-right-top`}>
      <body className="">

        <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
          {children}
        </main>
      </body>
    </html>
  );
}
