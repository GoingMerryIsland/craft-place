import "./globals.css";
import "./utilities.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Craft Place",
  description: "Marketplace & portfolio untuk kerajinan tangan",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className=" container mx-auto min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
