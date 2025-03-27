const { withContentlayer } = require('next-contentlayer')

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        pathname: '/image/**',
      },
    ],
  },
}

module.exports = withContentlayer(nextConfig)
