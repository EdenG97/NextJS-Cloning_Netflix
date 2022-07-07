/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodb_username: "edennetflix",
    mongodb_password: "darkside9090",
    mongodb_clustername: "cluster0",
    mongodb_database: "Netflix",
  },
};

module.exports = nextConfig;
