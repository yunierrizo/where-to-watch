/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "image.tmdb.org**",
            },
            {
                protocol: "https",
                hostname: "www.google.com**",
            },
        ],
    },
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig
