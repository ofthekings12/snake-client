const connectionFunctions = require('./client')
const { setupInput } = require("./input");


const connect = connectionFunctions.connect;
const conn = connect();


conn.on('connect', () => {
  console.log('New client connected!')
  conn.write("Name: OTK");
  conn.write("Hey");
  setupInput(conn);
});





