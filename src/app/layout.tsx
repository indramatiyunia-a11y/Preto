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
  title: "threadz — semua otaknya nyasar ke matematika",
  description:
    "Feed sosmed penuh cuitan dari orang awam, orang bego, dan ahli matematika. Gak ada like, cuma komen & share. Nama pengguna ditentuin sistem: akiomida + 8 angka.",
  keywords: ["threadz", "matematika", "cuitan", "sosmed", "feed"],
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='48' fill='%23fafafa'/%3E%3Ctext x='50' y='68' font-size='58' text-anchor='middle' fill='%23000'%3E%E2%88%9E%3C/text%3E%3C/svg%3E",
  },
  openGraph: {
    title: "threadz",
    description: "Orang awam, orang bego, dan ahli matematika. Satu feed. Nol tombol like.",
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
