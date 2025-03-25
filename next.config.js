/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Новый параметр для статического экспорта
  reactStrictMode: true,
  images: {
    unoptimized: true, // Обязательно, если в проекте используется `next/image`
  },
  experimental: {
    allowedDevOrigins: [
      "http://localhost:3000", // Локальная разработка
      "http://192.168.119.15", // Добавьте сюда свой IP-адрес
    ],
  },
};

module.exports = nextConfig;
