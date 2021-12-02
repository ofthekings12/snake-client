const connectionFunctions = require('./client')


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

setupInput(); // sets up event listener for user keypresses 🗿

// establishes a connection with the game server
const connect = connectionFunctions.connect;
const conn = connect();

conn.on('connect', () => {
  console.log('New client connected!')
  conn.write("Name: OTK");
  conn.write("Hey");
  conn.write("move: up")
  
  // conn.write("Move: left")
  // conn.write("Move: left")
});






