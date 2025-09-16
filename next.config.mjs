/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      // Beispiel:
      // { protocol: 'https', hostname: 'example.com' },
    ],
  },
  // IONOS Deploy Now: statischer Export
  output: 'export',
  distDir: 'target',     // sorgt dafür, dass alles in /target landet
  trailingSlash: false,
};

export default nextConfig;
