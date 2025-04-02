import Portfolio from "@/components/Portfolio";
import Script from "next/script";

export const metadata = {
  title: "Портфолио | Asatryan",
  description: "Проекты фронтенд-разработчика Asatryan на React, Next.js.",
};

export default function PortfolioPage() {
  return (
    <>
      <Script id="structured-data-portfolio" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Asatryan",
          jobTitle: "Frontend Developer",
          url: "https://asatryanhov.pl/portfolio",
          sameAs: [
            "https://github.com/asatryanhov",
            // Добавь другие соцсети, если есть
          ],
        })}
      </Script>
      <Portfolio />;
    </>
  );
}
