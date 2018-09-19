const shell = require("shelljs");

shell.exec(
  "ls -la /home/GUENEY/system-befehl",
  { silent: true, encoding: "latin1" },
  (code, stdout, stderr) => {
    if (code) {
      throw stderr;
    }
    console.log(stdout);
  }
);
