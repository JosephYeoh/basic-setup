// next.config.js
const withImages = require('next-images');
const withFonts = require('next-fonts');
const withCss = require('@zeit/next-css');
const withTM = require('next-transpile-modules');

module.exports = withImages(
  withFonts(
    withCss(
      withTM({
        transpileModules: ['common'],
        webpack: (config, options) => {
          config.module.rules.push({
            test: /\.(graphql|gql)$/,
            exclude: /node_modules/,
            loader: require.resolve('graphql-tag/loader')
          });
          return config;
        }
      })
    )
  )
);
