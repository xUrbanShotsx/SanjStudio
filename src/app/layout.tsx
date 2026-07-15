import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SanjStudio — Design. Brand. Create.",
  description:
    "A Wollongong studio designing, branding, and building custom-coded websites for businesses that want to stand out. No templates. Two-week delivery.",
  openGraph: {
    title: "SanjStudio — Design. Brand. Create.",
    description:
      "Custom websites and brand identities for Wollongong businesses. One person. No templates. Two-week delivery.",
    type: "website",
  },
  keywords: ["web design Wollongong", "brand identity", "custom website", "web development", "logo design"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
