import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname:'sjc.microlink.io',
        protocol: 'https',
        port: ''
      },
      {
        hostname:'images.unsplash.com',
        protocol: 'https',
        port: ''
      },
    ]
  }
};

export default nextConfig;
