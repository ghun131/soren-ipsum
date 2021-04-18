module.exports = (config, context) => {
  return {
    ...config,
    module: {
      ...config.module,
      rules: [
        config.module.rules[0],
        {
          test: /\.html$/i,
          use: 'raw-loader',
        },
        {
          test: /\.css$/i,
          use: 'raw-loader',
        },
        {
          test: /\.txt$/i,
          use: 'raw-loader',
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
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
      ],
    },
  };
};
