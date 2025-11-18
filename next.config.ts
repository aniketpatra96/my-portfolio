import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.pexels.com"],
    loader: "custom",
    loaderFile: "./loader.ts",
  },
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
