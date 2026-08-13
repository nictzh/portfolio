import type { Metadata } from "next";
import { Archivo, Inter, Space_Grotesk } from "next/font/google";
import Nav from "@/components/Nav/Nav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: "variable",
  axes: ["wdth"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nick Toh — Communication Designer",
  description:
    "10+ years across branding, digital, and UX/UI. Melbourne-based.",
  openGraph: {
    title: "Nick Toh — Communication Designer",
    description:
      "10+ years across branding, digital, and UX/UI. Melbourne-based.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} ${spaceGrotesk.variable}`}
    >
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
