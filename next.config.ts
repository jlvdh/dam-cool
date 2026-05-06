import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.dam.cool",
        pathname: "/reviews/**",
      },
    ],
  },
};

export default nextConfig;
