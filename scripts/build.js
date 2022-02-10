const { babel } = require('./babel');
const { breakline, command } = require('./command');

(() => {
  const params = process.argv.splice(2).join(' ');

  command('rm -rf build');

  command('yarn install');

  babel(params);

  command(
    'npx -p typescript tsc build/**/*.js --declaration --allowJs --emitDeclarationOnly --skipLibCheck --outDir build',
  );

  breakline();
})();
