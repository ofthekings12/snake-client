const connectionFunctions = require('./client')

// establishes a connection with the game server

const connect = connectionFunctions.connect;
const conn = connect();

conn.on('connect', () => {
  console.log('New client connected!')
  conn.write("Name: OTK");
  conn.write("WASAP")
});
