import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav/Nav";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nick Toh — Communication Designer",
  description:
    "10+ years across branding, digital, and UX/UI. Melbourne-based.",
  openGraph: {
    title: "Nick Toh — Communication Designer",
    description:
      "10+ years across branding, digital, and UX/UI. Melbourne-based.",
    images: ["/images/og-default.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
