import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./header/page";
import Footer from "./footer/page";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="main-container">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
