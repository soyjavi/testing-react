const PKG = require('./package.json');

module.exports = {
  name: PKG.name.split('/').pop(),

  alias: {
    '@package': './src',
  },

  development: {
    devServer: {
      /**
       * Configuration Object for devServer, see https://v4.webpack.js.org/configuration/dev-server/ for reference
       */
      proxy: {
        '/api/*': {
          secure: false,
          changeOrigin: true,
          target: 'https://',
        },
      },
    },
  },
};
