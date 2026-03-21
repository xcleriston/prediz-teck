import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" }, // allow all remote images
    ],
  },
};

export default nextConfig;
