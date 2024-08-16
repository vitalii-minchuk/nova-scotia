import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { TheMain } from "@/components/layout/the-main";
import { TheHeader } from "@/components/layout/the-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cat&dog",
  description: "cats and dogs testing app",
  icons: {
    icon: '/cat-dog.jpeg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TheHeader />
        <TheMain>
        {children}
        </TheMain>
      </body>
    </html>
  );
}
