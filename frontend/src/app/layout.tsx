import type { Metadata } from "next";
import { Inter, PT_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });
const ptSerif = PT_Serif({ subsets: ["latin", "cyrillic"], weight: ["400", "700"], variable: "--font-pt-serif" });

export const metadata: Metadata = {
  title: "Дашборд муниципальной статистики — Республика Башкортостан",
  description: "Официальная статистика для глав муниципальных районов",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} ${ptSerif.variable} font-sans`}>{children}</body>
    </html>
  );
}
