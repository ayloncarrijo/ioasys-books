/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/],
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: ["d2drtqy2ezsot0.cloudfront.net"],
  },
};
