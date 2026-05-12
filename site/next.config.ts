import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Включает режим статического экспорта
  images: {
    unoptimized: true, // Обязательно для GitHub Pages
  },
  // Раскомментируйте, если сайт будет не в корне (например, username.github.io/repo-name)
  basePath: "/practice-2025-1",
};

export default nextConfig;
