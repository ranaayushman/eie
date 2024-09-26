import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./section/Navbar";
import Footer from "./section/Footer";
import NavbarTwo from "./section/NavbarTwo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ISA & ISOI HIT",
  description: "ISA & ISOI HIT Students Chpater",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <NavbarTwo />
        {/* <Nav /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
