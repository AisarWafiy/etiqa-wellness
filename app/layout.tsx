import type React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n-context";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={`${geistSans.className} ${geistMono.className}`}>
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}

export const metadata = {
  generator: "neo",
};
