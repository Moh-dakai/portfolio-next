import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans", display: "swap" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Muhammad Abass Mudasir — Software Engineer",
  description:
    "Software engineer shipping web apps, APIs, AI tooling and smart-contract infrastructure. 68 merged PRs across 24 open-source orgs. TypeScript, Python, Rust.",
  keywords: ["Software Engineer", "TypeScript", "Rust", "Python", "Next.js", "Open Source", "MCP", "Soroban", "Nigeria", "Remote"],
  authors: [{ name: "Muhammad Abass Mudasir" }],
  openGraph: {
    title: "Muhammad Abass Mudasir — Software Engineer",
    description: "Web apps, APIs, AI tooling and open-source contributions. Open to remote roles.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
