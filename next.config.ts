import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
    loader: "custom",
    loaderFile: "./loader.ts",
  },
  reactStrictMode: true,
  allowedDevOrigins: ["192.168.1.35"],
};

export default nextConfig;
