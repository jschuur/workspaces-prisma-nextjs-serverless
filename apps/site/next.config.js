require('dotenv-flow').config({
  path: '../..',
  node_env: process.env.NODE_ENV,
  default_node_env: 'local',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
