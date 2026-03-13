import type { Metadata } from "next";

import { Roboto_Slab } from "next/font/google";


import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import "./globals.css";

import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";

const roboto = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevSaccone",
  description: "FullStack Developer Porfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="es" >
      
      <body >
        <div className={roboto.className} suppressHydrationWarning>
      <Header />
      
      {children}
       </div>
       < Navbar />
       <Footer/>
       </body>
     
    </html>
   
  );
}
