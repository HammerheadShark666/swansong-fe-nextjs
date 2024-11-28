import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'prodstswansong.blob.core.windows.net',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'localhost',
        pathname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  } 
};

export default nextConfig;
