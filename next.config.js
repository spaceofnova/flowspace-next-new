/** @type {import('next').NextConfig} */

// next.config.js
const withMDX = require("@next/mdx")();
module.exports = withMDX();
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
});
const { version } = require("./package.json");

module.exports = withPWA({
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "api.flowspace.app",
      },
      {
        protocol: "https",
        hostname: "files-novaspace.replit.app",
      },
    ],
  },
  publicRuntimeConfig: {
    version,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  }
});
