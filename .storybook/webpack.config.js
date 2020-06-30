const path = require("path");
const rootPath = path.resolve(__dirname, '../src')
module.exports = ({ config }) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    '~': rootPath,
  };
  config.module.rules.push({
    test: /\.css$/,
    loaders: [
      {
        loader: "postcss-loader",
        options: {
          ident: "postcss",
          plugins: [
            require("postcss-import"),
            require("tailwindcss")('./tailwind.config.js'),
            require("autoprefixer")
          ],
        }
      }
    ],
    include: path.resolve(__dirname, '../'),
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("react-docgen-typescript-loader")
      },
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' }
      }
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};