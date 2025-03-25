import { v4 as uuidv4 } from "uuid";
import PortfolioCardItem from "@/components/PortfolioCardItem";
import "@/components/Portfolio.css";

const qr = "/portfolio-images/qr_generator.jpg";
const webdevtools = "/portfolio-images/web_dev_tools.jpg";
const learnjs = "/portfolio-images/learn_js.png";
const color = "/portfolio-images/color-pallete.jpg";
const pln = "/portfolio-images/pln_converter.jpg";
const arianamodeling = "/portfolio-images/arianamodeling.jpg";
const gps = "/portfolio-images/gps.jpg";
const ip = "/portfolio-images/ipdata.png";
const esl = "/portfolio-images/esl.png";
const speedTest = "/portfolio-images/speed-test.png";
const eslNext = "/portfolio-images/eslNext.png";

export default function Portfolio() {
  const portfolioItems = [
    {
      key: "1",
      link: "https://asatryanhov.github.io/learn_front-end/",
      img: learnjs,
      alt: "site preview picture",
      title: "Education WEB site",
      descr: "HTML, CSS, JS, TS cheat sheets and more",
    },
    {
      key: "2",
      link: "https://asatryanhov.github.io/PLN_AMD_converter/",
      img: pln,
      alt: "site preview picture",
      title: "Converter",
      descr: "Converting PLN to USD , EUR and AMD",
    },
    {
      key: "3",
      link: "https://asatryanhov.github.io/color-pallets/",
      img: color,
      alt: "site preview picture",
      title: "Colors",
      descr: "There are  ready color pallets",
    },
    {
      key: "4",
      link: "https://asatryanhov.github.io/QR_generator/",
      img: qr,
      alt: "site preview picture",
      title: "QR generator",
      descr: "You can create your QR code free",
    },
    {
      key: "5",
      link: "https://asatryanhov.github.io/web-dev-tools/",
      img: webdevtools,
      alt: "site preview picture",
      title: "WEB Developer tools",
      descr: "Online resourses for WEB devs",
    },

    {
      key: "6",
      link: "https://ariana3dmodeling.pl/",
      img: arianamodeling,
      alt: "site preview picture",
      title: "Visit card site",
      descr: "visit card web page",
    },

    {
      key: "7",
      link: "https://asatryanhov.github.io/my-geoposition/",
      img: gps,
      alt: "geo-position",
      title: "Your geoposition coordinates",
      descr: "Check your coordinates and share it",
    },

    {
      key: "8",
      link: "https://asatryanhov.github.io/my-ip-address-info/",
      img: ip,
      alt: "your-ip",
      title: "IP address information",
      descr: "Check your ip address and info about it",
    },
    {
      key: "9",
      link: "https://asatryanhov.github.io/europa-super-league/",
      img: esl,
      alt: "esl",
      title: "European super league",
      descr: "A virtual league where  top clubs",
    },

    {
      key: "10",
      link: "https://asatryanhov.github.io/connection-speed-test/",
      img: speedTest,
      alt: "speed-tset",
      title: "Connection speed test",
      descr: "You can test your connection speed",
    },

    {
      key: "11",
      link: "https://football-super-league-next-app.vercel.app/",
      img: eslNext,
      alt: "esl",
      title: "European super league",
      descr: "aplication writen in next.js 15",
    },
  ];

  return (
    <div>
      <main>
        <section className="portfolio" id="portfolio">
          <div className="portfolio-container">
            <h2 className="portfolio-header">Portfolio</h2>

            <div className="portfolio-cards-wrapper">
              {portfolioItems
                .slice()
                .reverse()
                .map((item) => (
                  <PortfolioCardItem
                    key={uuidv4()}
                    link={item.link}
                    img={item.img}
                    alt={item.alt}
                    title={item.title}
                    descr={item.descr}
                  />
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// export default Portfolio;
