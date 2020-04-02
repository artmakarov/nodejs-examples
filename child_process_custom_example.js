const { exec, execSync } = require('./child_process_custom');

/**/
exec([
  'git --version',
  'npm -v',
  'node -v',
]);
/**/
execSync([
  'git --version',
  'npm -v',
  'node -v',
]);
/**/
