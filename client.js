const net = require("net");
const { setInterval } = require("timers");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131', // IP address here,
    port: 50542 // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: NAK');
    // setTimeout(() => {
    //   conn.write('Move: down');
    //   setTimeout(() => {
    //     conn.write('Move: left');
    //     setTimeout(() => {
    //       conn.write('Move: left');
    //       setTimeout(() => {
    //         conn.write('Move: right');
    //         setTimeout(() => {
    //           conn.write('Move: up');
    //           setInterval(() => {
    //             conn.write('Move: left');
    //           }, 500);
    //         }, 500);
    //       }, 500);
    //     }, 500);
    //   }, 500);
    // }, 500);
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
};

module.exports = { connect };