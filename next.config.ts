import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        unoptimized: false,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*'
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/country',
                permanent: false,
            }
        ]
    }
};

export default nextConfig;
