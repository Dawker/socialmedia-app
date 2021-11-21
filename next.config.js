
/**
 * @type {import('next').NextConfig}
**/
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ['links.papareact.com', 'https://cdn.fakercloud.com']
  },
  /* config options here */
}

module.exports = nextConfig