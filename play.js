const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541'
  });

    // interpret incoming data as text
    conn.setEncoding("utf8");

    return conn;
  };

const conn = connect();

conn.on('connect', () => {
  console.log('New client connected!')
  conn.write("Name: OTK");
  conn.write("WASAP")
});
