import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Link from "next/link";
import NavBar from "@/components/NavBar";
import VantaBackground from "@/components/VantaBackground";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AsatryanHov",
  description: "my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <VantaBackground />
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
