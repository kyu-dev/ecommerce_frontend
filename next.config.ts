import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Autoriser les images locales sans optimisation
    unoptimized: true,
    // Domaines autorisés pour les images externes
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;
