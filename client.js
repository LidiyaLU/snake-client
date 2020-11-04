const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: 'localhost',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    conn.write('hi!');
    console.log('Successfully connected to game server');
    conn.write('Name: LUC')
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  // conn.on('data', (data) => {
  //   conn.write('Move: up');
  // });

  return conn;
  
}

module.exports = {connect};