// Prints a statement a specific number of times based on arg passed
const { argv } = require('node:process');

const number = parseInt(argv[2]);
if (number) {
  for (let i = 0; i < number; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurences');
}
