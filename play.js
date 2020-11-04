const { connect } = require('./client');
const {setupInput} = require('./input');

console.log('Connecting ...');
// const connObj = new connect();
setupInput(connect());