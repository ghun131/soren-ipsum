'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
// Add React-specific configuration
function getWebpackConfig(config) {
  config.module.rules.push(
    {
      test: /\.(png|jpe?g|gif|webp)$/,
      loader: require.resolve('url-loader'),
      options: {
        limit: 10000,
        name: '[name].[hash:7].[ext]',
      },
    },
    {
      test: /\.svg$/,
      oneOf: [
        // If coming from JS/TS file, then transform into React component using SVGR.
        {
          issuer: {
            test: /\.[jt]sx?$/,
          },
          use: [
            {
              loader: require.resolve('@svgr/webpack'),
              options: {
                svgo: false,
                titleProp: true,
                ref: true,
              },
            },
            {
              loader: require.resolve('url-loader'),
              options: {
                limit: 10000,
                name: '[name].[hash:7].[ext]',
                esModule: false,
              },
            },
          ],
        },
        // Fallback to plain URL loader.
        {
          use: [
            {
              loader: require.resolve('url-loader'),
              options: {
                limit: 10000,
                name: '[name].[hash:7].[ext]',
              },
            },
          ],
        },
      ],
    },
    {
      test: /\.(woff(2)?|eot|ttf|otf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/fonts',
          },
        },
      ],
    },
    {
      test: /\.txt$/i,
      use: 'raw-loader',
    }
  );
  return config;
}
module.exports = getWebpackConfig;
//# sourceMappingURL=webpack.js.map
