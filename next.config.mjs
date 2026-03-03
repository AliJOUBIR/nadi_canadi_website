/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dev-nadi-canadi.pantheonsite.io',
            },
            {
                protocol: 'https',
                hostname: 'make.wordpress.org', // Keep fallback
            }
        ],
    },
};

export default nextConfig;
