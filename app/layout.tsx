import type { Metadata } from "next";

import { Roboto_Slab } from "next/font/google";


import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import "./globals.css";

import NavBar from "./components/navbar";
import Header from "./components/header";

const roboto = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevSaccone",
  description: "Developer and UX/UI Designer Porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={roboto.className}>
      < NavBar />
      <Header />
      {children}</body>
    </html>
  );
}
