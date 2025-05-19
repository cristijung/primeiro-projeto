'use client';

import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import MyContextProvider from "@/provider/MyContextProvider";


export default function LayoutWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MyContextProvider>
        <Header/>
        {children}
        <Footer/>
        </MyContextProvider>
      </body>
    </html>
  );
}
