import { Montserrat } from "next/font/google"; // Импортируем шрифт
import { WebVitals } from "@/components/web-vitals";
import Script from "next/script";
// import { Montserrat } from 'next/font/google';

import NavBar from "@/components/NavBar";
import VantaBackground from "@/components/VantaBackground";
import SplashScreen from "@/components/SplashScreen";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Указываем нужные начертания
  display: "swap", // Улучшает производительность загрузки шрифта
});

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
      <head>
        <meta
          name="google-site-verification"
          content="8_MFWcHpjMx1tg5YujMa1yTpFFblimew-iYfpjeyuYM"
        />
        {/* Google Tag Manager */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SE7G9LZSZ8"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SE7G9LZSZ8');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body suppressHydrationWarning={true} className={montserrat.className}>
        <WebVitals />
        <VantaBackground />

        <SplashScreen>
          <NavBar />
          <main>{children}</main>
        </SplashScreen>
      </body>
    </html>
  );
}
