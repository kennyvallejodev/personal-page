const withImages = require("next-images");
const { getRedirectStatus } = require("next/dist/lib/load-custom-routes");

module.exports = withImages({
  reactStrictMode: true,
  images: {
    domains: ["kenny-page-assets.s3.us-west-2.amazonaws.com"],
  },
  webpack(config, options) {
    return config;
  },
  async redirects() {
    return [
      {
        source: "/cv",
        destination: "/cv.pdf",
        permanent: true,
      },
    ];
  },
});
