// Stores the active TCP connection object.
let connection;
const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write('Move: up');
    connection.write('Say: UPP');
  } else if (key === 'a') {
    connection.write('Move: left');
    connection.write('Say: lef');
  } else if (key === 's') {
    connection.write('Move: down');
    connection.write('Say: dow');
  } else if (key === 'd') {
    connection.write('Move: right');
    connection.write('Say: rit');
  } else if (key === 'q') {
    connection.write('Say: HI');
  } else if (key === 'e') {
    connection.write('Say: BYE');
  } // your code here
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };