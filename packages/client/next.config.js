// next.config.js
const withImages = require('next-images');
const withTM = require('next-transpile-modules');

module.exports = withImages(
  withTM({
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.(graphql|gql)$/,
        exclude: /node_modules/,
        loader: require.resolve('graphql-tag/loader')
      });
      return config;
    }
  })
);
