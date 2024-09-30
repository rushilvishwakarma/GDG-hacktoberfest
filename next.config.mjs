/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'api.microlink.io',
          pathname: '/**', // Allows any path under the domain
        },
      ],
    },
  };
  
  export default nextConfig; // Use ES module export syntax
  