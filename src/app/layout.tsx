import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Animations } from "@/components/Animations";
import { Cursor } from "@/components/Cursor";

const inter = Inter({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SanjStudio — Custom Websites Built Right",
  description:
    "Custom-built websites for small businesses and local brands. No templates, no shortcuts — just precision craft that works.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Cursor />
        <SmoothScroll />
        <Animations />
        {children}
      </body>
    </html>
  );
}
