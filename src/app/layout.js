import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "../components/LenisProvider";
import { Toaster } from 'react-hot-toast';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HRMS | Human Resource Management System",
  description: "HRMS is a human resource management system that helps organizations manage their human resources. It provides features such as employee management, attendance tracking, leave management, salary management, and performance management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster />
        <LenisProvider>
          <Navbar />
           
          {children}
         <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
