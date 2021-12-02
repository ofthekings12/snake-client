let connection;
const handleUserInput = function (data, conn) { // data will be whatever the user pressed on their keyboard in a utf8 string ---> https://www.utf8-chartable.de/
  if (data === "\u0003") {
    process.exit(); // leave the game if the user presses ctrl + c
  }
  if (data === "w") {
    conn.write("Move: up")
  }
  if (data === "a") {
    conn.write("Move: left")
  } 
  if (data === "s") {
    conn.write("Move: down")
  } 
  if (data === "d") {
    conn.write("Move: right")
  }
};



const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", (data) => handleUserInput(data,connection));

  return stdin;
};

module.exports = { setupInput }