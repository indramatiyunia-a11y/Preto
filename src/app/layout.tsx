import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akiomida",
  description:
    "Cuitan sehari-hari dari orang awam, orang bego, dan ahli matematika. Nama ditentukan sistem: akiomida + 8 angka. Gak ada like — cuma komen & share.",
  keywords: ["akiomida", "cuitan", "matematika", "feed", "sosmed"],
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%231c1917'/%3E%3Ctext x='50' y='72' font-size='58' text-anchor='middle' fill='%23fcd34d'%3E%CE%A3%3C/text%3E%3C/svg%3E",
  },
  openGraph: {
    title: "Akiomida",
    description: "Orang awam, orang bego, dan ahli matematika. Satu feed. Nol tombol suka.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
