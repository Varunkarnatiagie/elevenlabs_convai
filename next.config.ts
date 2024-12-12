import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Enables static export
  basePath: "/elevenlabs_convai", // Replace with your GitHub repository name
  assetPrefix: "/elevenlabs_convai", // Prefix for assets, required for GitHub Pages
};

export default nextConfig;
