import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Désactiver complètement l'optimisation d'images
    unoptimized: true,
    // Loader personnalisé pour forcer les URLs directes
    loader: 'custom',
    loaderFile: './lib/imageLoader.js',
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
