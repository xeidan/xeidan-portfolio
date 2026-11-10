
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
  },

  // Keep Next.js file tracing within this project.
  outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
