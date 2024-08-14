/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['sequelize'],
      },
      images: {
        domains: ['media.istockphoto.com'],
      },
};

export default nextConfig;
