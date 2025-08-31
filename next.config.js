/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  // Optimize for production
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig