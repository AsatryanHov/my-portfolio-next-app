import { Montserrat } from "next/font/google"; // Импортируем шрифт
import NavBar from "@/components/NavBar";
import VantaBackground from "@/components/VantaBackground";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Указываем нужные начертания
  display: "swap", // Улучшает производительность загрузки шрифта
});

export const metadata = {
  title: "AsatryanHov",
  description: "my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={montserrat.className}>
        <VantaBackground />
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
