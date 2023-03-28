/** @type {import('next').NextConfig} */
const nextConfig = {
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
