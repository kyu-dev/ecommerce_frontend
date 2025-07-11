import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Désactiver complètement l'optimisation d'images
    unoptimized: true,
  },
};

export default nextConfig;
