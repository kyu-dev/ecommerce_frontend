import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Autoriser les images locales sans optimisation
    unoptimized: true,
    // Ou spécifier les domaines autorisés
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-domain.com', // Remplacez par votre domaine
      },
    ],
  },
};

export default nextConfig;
