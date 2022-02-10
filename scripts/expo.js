const { babel } = require('./babel');
const { breakline, command } = require('./command');

(() => {
  const params = process.argv.splice(2).join(' ');

  babel();

  breakline();

  command(`expo ${params}`);

  breakline();
})();
