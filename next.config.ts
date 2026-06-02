import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  staticPageGenerationTimeout: 120,
};

export default nextConfig;
