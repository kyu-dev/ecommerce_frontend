import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Autoriser les images locales sans optimisation
    unoptimized: true,
    // Ou spécifier les domaines autorisés
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "ecommerce-frontend-57e99oe3o-arthurs-projects-8f9de871.vercel.app/", // Remplacez par votre domaine
      },
    ],
  },
};

export default nextConfig;
