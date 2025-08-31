import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  experimental: {
    turbopackScopeHoisting: false, // 🔑 Turbopack 최적화 비활성화
  },
  // Sanity 라이브러리 강제로 트랜스파일
  transpilePackages: ["sanity", "next-sanity", "@sanity/client"],
};

export default nextConfig;
