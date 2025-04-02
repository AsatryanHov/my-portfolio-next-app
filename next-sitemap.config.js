/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://asatryanhov.pl", // 🔁 Замени на твой домен (обязательно с https)
  generateRobotsTxt: true, // Автоматически создаст robots.txt
  outDir: "./public", // <-- добавь это!
  sitemapSize: 5000, // По умолчанию, можно не менять
  changefreq: "daily", // Как часто обновляются страницы
  priority: 0.7, // Приоритет страниц
  exclude: ["/admin", "/drafts", "/secret"], // 🔒 Страницы, которые не попадут в sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/drafts", "/secret"], // 🔒 Закрываем для поисковиков
      },
    ],
    additionalSitemaps: [
      // если у тебя много под-сайтов
      // 'https://yourdomain.com/server-sitemap.xml',
      "https://asatryanhov.github.io/learn_front-end/",
      "https://asatryanhov.github.io/PLN_AMD_converter/",
      "https://asatryanhov.github.io/color-pallets/",
      "https://asatryanhov.github.io/QR_generator/",
      "https://asatryanhov.github.io/web-dev-tools/",
      "https://asatryanhov.github.io/my-geoposition/",
      "https://asatryanhov.github.io/my-ip-address-info/",
      "https://asatryanhov.github.io/europa-super-league/",
      "https://asatryanhov.github.io/connection-speed-test/",
      "https://football-super-league-next-app.vercel.app/",
    ],
  },
};
