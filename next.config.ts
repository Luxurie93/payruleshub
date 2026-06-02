import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  staticPageGenerationTimeout: 120,
};

export default nextConfig;
