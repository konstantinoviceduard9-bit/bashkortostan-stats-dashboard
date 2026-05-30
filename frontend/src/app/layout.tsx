import type { Metadata } from "next";
import { Cormorant_Garamond, Onest } from "next/font/google";
import { Providers } from "@/components/layout/Providers";
import "./globals.css";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  variable: "--font-onest",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-cormorant",
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  title: "Панель муниципальной статистики — Республика Башкортостан",
  description: "Официальная статистика для глав муниципальных районов",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: "#0077b6",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${onest.variable} ${cormorant.variable} font-sans`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
