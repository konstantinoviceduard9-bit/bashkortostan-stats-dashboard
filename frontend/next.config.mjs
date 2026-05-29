/** @type {import('next').NextConfig} */
const isGithubPages = process.env.STATIC_GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/bashkortostan-stats-dashboard" : "";

const nextConfig = {
  output: isGithubPages ? "export" : "standalone",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: isGithubPages,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_STATIC_DEMO: isGithubPages ? "true" : "",
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
