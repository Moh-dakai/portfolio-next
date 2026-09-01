import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display, DM_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Abass Mudasir — Software Engineer",
  description:
    "Software engineer building scalable, secure products across web applications, APIs, AI tooling, and developer-facing systems. React, Next.js, Laravel, Python.",
  keywords: [
    "Software Engineer",
    "React",
    "Next.js",
    "Laravel",
    "Python",
    "AI",
    "Kaduna",
    "Nigeria",
    "Remote",
  ],
  authors: [{ name: "Muhammad Abass Mudasir" }],
  openGraph: {
    title: "Muhammad Abass Mudasir — Software Engineer",
    description:
      "Software engineer building scalable, secure products. Open to remote roles.",
    type: "website",
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
      className={`${dmSans.variable} ${dmSerif.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
