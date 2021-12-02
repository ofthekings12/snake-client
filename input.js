const handleUserInput = function (data) { // data will be whatever the user pressed on their keyboard in a utf8 string ---> https://www.utf8-chartable.de/
  if (data === "\u0003") {
    process.exit(); // leave the game if the user presses ctrl + c
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = { setupInput }