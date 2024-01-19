import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

const rootClassName = "dark";

export const metadata: Metadata = {
  title: "Arsenio's Portfolio",
  description: "A personal portfolio built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body lang="en" className={`${inter.className} ${rootClassName}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
