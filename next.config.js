const path = require('path');
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, './src'),
    };

    config.module.rules.push({
      test: /\.gif$/i,
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]',
      },
    });

    return config;
  },
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        handleImages: ['jpeg', 'png', 'svg', 'webp', 'ico'],
        inlineImageLimit: -1,
      },
    ],
  ],
  nextConfig
);
