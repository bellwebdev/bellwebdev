module.exports = {
  webpack: (cfg) => {
    cfg.module.rules.push({
      test: /\.md$/,
      loader: "frontmatter-markdown-loader",
      options: { mode: ["react-component"] },
    });
    return cfg;
  },
  async rewrites() {
    return [
      {
        source: "/api/sendData",
        destination: "https://bellwebbackend.onrender.com/customers/", // Proxy to Backend
      },
    ];
  },
};
