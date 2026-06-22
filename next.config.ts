import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/cv-clovis-dylan.pdf",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
