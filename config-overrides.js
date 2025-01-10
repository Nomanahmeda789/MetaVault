const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    querystring: require.resolve("querystring-es3"),
    assert: require.resolve("assert/"),
    util: require.resolve("util/"),
    process: require.resolve("process/browser"),
    buffer: require.resolve("buffer/"),
    net: false,
    tls: false,
    fs: false,
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ]);

  return config;
};
