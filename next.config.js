/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
  },
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: "/news",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
