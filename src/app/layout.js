import { Montserrat } from "next/font/google"; // Импортируем шрифт
// import { Montserrat } from 'next/font/google';

import NavBar from "@/components/NavBar";
import VantaBackground from "@/components/VantaBackground";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Указываем нужные начертания
  display: "swap", // Улучшает производительность загрузки шрифта
});

// const montserrat = Montserrat({
//   subsets: ['latin'],
//   weight: ["400", "600", "700"], // Убедитесь, что значения обёрнуты в кавычки
//   display: "swap",
// });

// export const metadata = {
//   title: "AsatryanHov",
//   description: "my portfolio",
// };
export const metadata = {
  metadataBase: new URL("https://asatryanhov.pl"),
  title: "AsatryanHov",
  description: "AsatryanHov portfolio website",
  keywords: [
    "asatryanhov",
    "@asatryanhov",
    "AsatryanHov",
    "front-end",
    "developer",
    "@AsatryanHov",
    "Asatryan",
    "Hov",
    "Asatryan Hovhannes",
    "XDvJBj71kTJabwgFiwkFHvHxW",
  ],
  authors: [
    {
      name: "Asatryan Hovhannes",
      url: "https://asatryanhov.pl",
    },
  ],
  creator: "Asatryan Hovhannes",
  publisher: "Asatryan Hovhannes",

  openGraph: {
    type: "website",
    url: "https://asatryanhov.pl/",
    title: "AsatryanHov",
    description: "portfolio website",
    images: [
      {
        url: "https://i.imgur.com/6vMAtBk.png",
        width: 1200,
        height: 630,
        alt: "AsatryanHov Portfolio Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AsatryanHov",
    description: "portfolio website",
    images: ["https://i.imgur.com/6vMAtBk.png"],
    site: "@AsatryanHov",
  },

  robots: {
    index: true,
    follow: true,
  },

  other: {
    Address: "Poland, Warsaw",
  },
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
