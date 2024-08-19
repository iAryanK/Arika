/** @type {import('next').NextConfig} */
const withPWA = require('@ducanh2912/next-pwa').default({
    dest: 'public',
    cacheOnFrontendNav: true,
    aggressiveFrontEndNavCaching: true,
    workboxOptions: {
        disableDevLogs: true,
    }
})

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ]
    }
};

module.exports = withPWA(nextConfig);
