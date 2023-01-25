let express = require('express');
let app = express();

const spawn = require('child_process').spawn;

// a command you want to execute.
const command = "node server.js";

const parts = command.split(" ");
const cmd = parts[0];
const args = parts.splice(1);

// a background process is running!
// it is not stopped even if parent node process is killed.
spawn(cmd, args, {
  stdio: 'ignore', // piping all stdio to /dev/null
  detached: true,
  env: process.env,
}).unref();

console.log('Hello World');


































 module.exports = app;
