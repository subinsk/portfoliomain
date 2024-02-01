/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/source",
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "",
      },
      {
        protocol: "https",
        hostname: "images.credential.net",
        port: "",
        pathname: "/embed/**",
      },
    ],
  },
};

export default nextConfig;
