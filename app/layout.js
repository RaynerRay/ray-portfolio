import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Godfrey Portfolio",
  description: "Godfrey Ndingindwayo",
};

export default function RootLayout({ children }) {
  return (
    <>
    <Toaster position="top-center" reverseOrder={false} />
    <Navbar />
    <html lang="en">
      
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
    </>
    
  );
}
