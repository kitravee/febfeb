/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// const withTM = require('next-transpile-modules')([
//   '@mui/material',
//   '@mui/system',
//   '@mui/icons-material',
// ]);

const nextPlugins = [[withBundleAnalyzer]];

const nextConfig = {
  reactStrictMode: true,
  styledComponents: true,
  images: {
    minimumCacheTTL: 60 * 60 * 24 * 7,
    /* use as template string only */
    /* to avoid error Array of strings received invalid values (, ) */
    domains: ['res.cloudinary.com'],
  },
};

module.exports = withPlugins([nextPlugins, nextConfig]);
