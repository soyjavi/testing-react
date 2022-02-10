const { command } = require('./command');

const babel = (params = '') => {
  const source = './src';
  const configFile = '--config-file ./babel.config.js';
  const extensions = '--extensions .js,.jsx,.ts,.tsx';
  const ignore = '--ignore "**/__mocks__","**/__stories__","**/__tests__"';
  const outDir = '--out-dir ./build';
  const sourceMaps = '--source-maps';

  command(`yarn babel ${source} ${configFile} ${extensions} ${ignore} ${outDir} ${sourceMaps} ${params}`);
};

module.exports = { babel };
