// Prints th first argument passed to it

const { argv } = require('node:process');
const firstArg = argv[2];

if (firstArg) {
  console.log(firstArg);
} else {
  console.log('No argument');
}
