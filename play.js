const connectionFunctions = require('./client')
const { setupInput } = require("./input");


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





