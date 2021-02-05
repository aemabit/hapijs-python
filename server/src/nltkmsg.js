const { PythonShell } = require("python-shell");

const checkmsg = (sentence) => {
  return new Promise((resolve, reject) => {
    let options = {
      args: [sentence]
    };

    PythonShell.run("server/src/vader.py", options, function (err, result) {
      if (err) throw err;
      if (result) {
        resolve(result);
      }
    });
  });
};

module.exports = checkmsg;
