const { exec: _exec, execSync: _execSync } = require('child_process');

function execHandler(command, error, stdout, stderr) {
  console.log(`Done command: ${command}`);

  if (error) {
    console.error(`Exec error: ${error}`);
    return;
  }

  if (stdout) {
    console.log(`Stdout: ${stdout}`);
  }

  if (stderr) {
    console.error(`Stderr: ${stderr}`);
  }
}

function exec(commands, callback) {
  (typeof commands == 'string' ? [commands] : commands)
    .forEach((command) => {
      // console.log(`Exec command: ${command}`);

      _exec(command, (...args) => (callback || execHandler)(command, ...args));
    });
}

function execSync(commands, callback) {
  (typeof commands == 'string' ? [commands] : commands)
    .forEach((command) => {
      console.log(`Exec command: ${command}`);

      try {
        const stdout = _execSync(command).toString();

        if (callback) {
          callback(command, stdout);
        } else {
          console.log(`Stdout: ${stdout}`);
        }
      } catch (error) {
        if (callback) {
          callback(command, null, error);
        } else {
          console.error(`${error}\n`);
        }
      }
    });
}

module.exports = {
  exec,
  execSync,
};
