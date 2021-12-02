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
  if (data === "1") {
    conn.write("Say: GUESS WHOS BACK IN")
  }
  if (data === "2") {
    conn.write("Say: THE HOUSE HEELS CLICK")
  }
  if (data === "3") {
    conn.write("Say: CLACKIN ABOUT")
  }
  if (data === "4") {
    conn.write("Say: FINE FRESH FEMININE")
  }
  if (data === "5") {
    conn.write("Say: STYLE TO ELEVEN")
  }
  if (data === "6") {
    conn.write("Say: I'M DIVINE SO HEAVENLY")
  }
  if (data === "7") {
    conn.write("Say: GENTLEMEN SWEATIN ITS DIMES")
  }
  if (data === "8") {
    conn.write("Say: ACROSS THE BOARD")
  }
  if (data === "9") {
    conn.write("Say: NO DOUBT")
  }
  if (data === "0") {
    conn.write("Say: BODY LIKE: WWOOOWWWW!")
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