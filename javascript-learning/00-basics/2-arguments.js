// The process.argv property returns an array containig the command line arguments
// passed when the node.js process was launched
// The first element is process.execPath, second is path to the
// exec file being executed remaining are the passed args

const { argv } = require('node:process');
if (argv.length > 2) {
  console.log('Argument found');
} else {
  console.log('No argument');
}
