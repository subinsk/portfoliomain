module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/source",
    });

    return config;
  },
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "images.credential.net"],
  },
};
