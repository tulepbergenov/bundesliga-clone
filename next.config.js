/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  i18n,
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
