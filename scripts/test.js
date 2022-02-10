const { breakline, command } = require('./command');

(() => {
  const params = process.argv.splice(2).join(' ');

  command('yarn install');
  command(`jest --passWithNoTests ${params}`);

  breakline();
})();
