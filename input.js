let connection;

const handleUserInput = function(conn) {
  const stdin = process.stdin;
  const movements = {
  '\u0077': 'Move: up',
  '\u0061': 'Move: left',
  '\u0073': 'Move: down',
  '\u0064': 'Move: right'
  };
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    } else {
      conn.write(movements[key])
    }
})
};



const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(connection);
  return stdin;
}

module.exports = {setupInput};