import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Включает режим статического экспорта
  images: {
    unoptimized: true, // Обязательно для GitHub Pages
  },
  // Раскомментируйте, если сайт будет не в корне (например, username.github.io/repo-name)
  basePath: "/site",
  assetPrefix: "/site",
};

export default nextConfig;
