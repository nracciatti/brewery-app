import { NextConfig } from "next";

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
    ],
  },
  // Desactivar ESLint durante la compilación
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Desactivar la comprobación de tipos durante la compilación
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default config;
