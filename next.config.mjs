/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Only run type-checking during build
    ignoreBuildErrors: false,
  },
  eslint: {
    // Only run ESLint during build
    ignoreDuringBuilds: false,
  },
  images: {
    remotePatterns: [
      // Add allowed image domains here
    ],
  },
  // IONOS Deploy Now specific configurations
  output: 'standalone',
  trailingSlash: false,
};

export default nextConfig;
