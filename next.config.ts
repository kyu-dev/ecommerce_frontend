import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Autoriser les domaines externes pour les images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'imgur.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
