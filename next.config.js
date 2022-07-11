/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    mongodb_username: "edennetflix",
    mongodb_password: "eden4321",
    mongodb_clustername: "cluster0",
    mongodb_database: "Netflix",
    NEXTAUTH_SECRET:
      "sqRBasDWAC9b3XELGDubLpWgOHjP1UF2dHOXSSw8ZcQ=",
  },
};

module.exports = nextConfig;
