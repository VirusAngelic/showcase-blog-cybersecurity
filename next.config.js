/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'www.ascentor.co.uk',
      }
    ]
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
