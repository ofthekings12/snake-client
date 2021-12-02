let connection;
const handleUserInput = function (data, conn) { 
  if (data === "\u0003") {
    process.exit();
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
    conn.write("Say: STYLE TO ELEVEN IM")
  }
  if (data === "6") {
    conn.write("Say: DIVINE SO HEAVENLY")
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
    conn.write("Say: BODY LIKE: WWOOOWWW!")
  }
  if (data === "b") {
    conn.write("Say: Am I a Nicki fan???")
  }
  if (data === "n") {
    conn.write("Say: PULL UP IN A")
  }
  if (data === "m") {
    conn.write("Say: SRILANKA! WHAAAT?")
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