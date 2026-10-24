import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Derleme çıktısının yeri. Sunucuda güncelleme yaparken yeni sürüm ayrı bir
  // klasöre derlenip sonra yerine konuyor; böylece çalışan site, yarım kalmış
  // bir derlemeyi okumuyor.
  distDir: process.env.NEXT_DIST_DIR || '.next',
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
