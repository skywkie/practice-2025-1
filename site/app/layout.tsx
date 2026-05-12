import Header from "@/components/ui/header";
import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Видеотекст",
  description: "Проектная практика по видеотексту",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="min-h-dvh overflow-x-hidden">
        <Header />
        <main className="px-20 py-10">{children}</main>
      </body>
    </html>
  );
}
