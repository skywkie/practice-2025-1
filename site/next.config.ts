import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Включает статический экспорт
  images: {
    unoptimized: true, // Обязательно, так как next/image не работает при экспорте
  },
};

export default nextConfig;
