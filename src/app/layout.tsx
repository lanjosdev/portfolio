import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucas dos Anjos - Desenvolvedor Front-End & Web Designer",
  description: "Portfólio de Lucas dos Anjos, desenvolvedor front-end e web designer apaixonado por criar experiências digitais marcantes.",
  keywords: ["desenvolvedor", "front-end", "web designer", "react", "javascript", "typescript", "next.js"],
  authors: [{ name: "Lucas dos Anjos" }],
  creator: "Lucas dos Anjos",
  metadataBase: new URL("https://lanjosdev.vercel.app"),
  openGraph: {
    title: "Lucas dos Anjos - Desenvolvedor Front-End & Web Designer",
    description: "Portfólio de Lucas dos Anjos, desenvolvedor front-end e web designer",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas dos Anjos - Desenvolvedor Front-End & Web Designer",
    description: "Portfólio de Lucas dos Anjos, desenvolvedor front-end e web designer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
