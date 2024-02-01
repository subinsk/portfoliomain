import type { Metadata } from "next";
import { Proza_Libre } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";

const prozaLibre = Proza_Libre({
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Subin S K | Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={prozaLibre.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
