const createExpoWebpackConfigAsync = require('@expo/webpack-config');

const { development: { devServer = {} } = {} } = require('./.soyjavirc.js');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  if (config.mode === 'development') Object.keys(devServer).forEach((key) => (config.devServer[key] = devServer[key]));

  return config;
};
