const isProduction = process.env.NODE_ENV === 'production'

const assetPrefix = isProduction ? '/Fay' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  basePath: isProduction ? '/Fay' : '',
  assetPrefix: isProduction ? '/Fay' : '',
  env: {
    ASSET_PREFIX: assetPrefix
  }
}

module.exports = nextConfig
