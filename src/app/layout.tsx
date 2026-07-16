import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Animations } from "@/components/Animations";

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const serif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "SanjStudio | Custom Website Design Australia",
    template: "%s | SanjStudio",
  },
  description:
    "SanjStudio builds custom websites and brand identities for Australian businesses. No templates, no page builders. Two-week delivery. Serving Sydney, Melbourne, Brisbane, Perth, Wollongong and beyond.",
  keywords: [
    "custom website design Australia",
    "web design Sydney",
    "web design Melbourne",
    "web design Brisbane",
    "web design Perth",
    "web design Wollongong",
    "website designer Australia",
    "custom website builder Australia",
    "small business website Australia",
    "Next.js web developer Australia",
  ],
  authors: [{ name: "SanjStudio" }],
  creator: "SanjStudio",
  metadataBase: new URL("https://sanjstudio.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "SanjStudio",
    title: "SanjStudio | Custom Website Design Australia",
    description:
      "Custom websites and brand identities for Australian businesses. No templates. Two-week delivery.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SanjStudio | Custom Website Design Australia",
    description:
      "Custom websites and brand identities for Australian businesses. No templates. Two-week delivery.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body>
<SmoothScroll />
        <Animations />
        {children}
      </body>
    </html>
  );
}
