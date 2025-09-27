/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['readdy.ai'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'readdy.ai',
        port: '',
        pathname: '/api/search-image**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['@fortawesome/react-fontawesome', '@fortawesome/free-solid-svg-icons', '@fortawesome/free-brands-svg-icons'],
  },
}

module.exports = nextConfig
