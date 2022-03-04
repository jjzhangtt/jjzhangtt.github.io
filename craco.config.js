const path = require("path");
const CracoLessPlugin = require("craco-less");
const SimpleProgressWebpackPlugin = require("simple-progress-webpack-plugin");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = "docs";
      webpackConfig.output = {
        ...webpackConfig.output,
        path: path.resolve(__dirname, "docs"), // 修改输出文件目录
        publicPath: "/",
      };
      return webpackConfig;
    },
    plugins: [
      // 查看打包的进度
      new SimpleProgressWebpackPlugin(),
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        cssLoaderOptions: {
          modules: {
            auto: /\.m\.\w+$/i,
            localIdentName: "[local]_[hash:base64:5]",
          },
        },
      },
    },
  ],
};
