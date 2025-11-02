import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,   // <— this fixes subdomain issues 100%
  },};

export default nextConfig;
