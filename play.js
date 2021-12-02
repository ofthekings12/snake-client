const connectionFunctions = require('./client')
const { setupInput } = require("./input");


const connect = connectionFunctions.connect;
const conn = connect();

// establishes a connection with the game server

conn.on('connect', () => {
  console.log('New client connected!')
  conn.write("Name: OTK");
  conn.write("Hey");
  conn.write("move: up")
  setupInput(conn); // sets up event listener for user keypresses 🗿

  // conn.write("Move: left")
  // conn.write("Move: left")
});





