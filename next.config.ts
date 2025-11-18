import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.pexels.com"],
    loader: "custom",
    loaderFile: "./loader.ts",
  },
  reactStrictMode: true,
};

export default nextConfig;
