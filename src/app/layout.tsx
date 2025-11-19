import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigations/Navbar";
import Footer from "@/components/navigations/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "UBC BIOMOD",
  description: "UBC BIOMOD Club Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jakarta.variable}>
      <body className={jakarta.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
