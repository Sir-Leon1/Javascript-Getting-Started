const fs = require("fs");
const path = require("path");

// Helper to create directories and files
function createStructure(base, structure) {
  for (const key in structure) {
    const fullPath = path.join(base, key);

    if (typeof structure[key] === "object") {
      if (!fs.existsSync(fullPath)) {
        fs.mkdirSync(fullPath, { recursive: true });
        console.log(`Created directory: ${fullPath}`);
      }
      createStructure(fullPath, structure[key]);
    } else {
      fs.writeFileSync(fullPath, structure[key]);
      console.log(`Created file: ${fullPath}`);
    }
  }
}

// Define the full directory + file structure
const repoStructure = {
  "javascript-learning": {
    "00-basics": {
      "variables.js": "",
      "datatypes.js": "",
      "operators.js": "",
      "conditionals.js": "",
      "loops.js": "",
      "comments.md": "# JS Basics Notes"
    },
    "01-functions": {
      "function-declarations.js": "",
      "arrow-functions.js": "",
      "callbacks.js": "",
      "closures.js": ""
    },
    "02-objects-arrays": {
      "arrays.js": "",
      "objects.js": "",
      "array-methods.js": "",
      "destructuring.js": ""
    },
    "03-dom-manipulation": {
      "index.html": "<!DOCTYPE html>\n<html><head><title>DOM</title></head><body></body></html>",
      "dom-basics.js": "",
      "event-handling.js": "",
      "form-validation.js": ""
    },
    "04-es6-modules": {
      "import-export.js": "",
      "modules-demo": {
        "main.js": "",
        "utils.js": ""
      }
    },
    "05-async-js": {
      "callbacks.js": "",
      "promises.js": "",
      "async-await.js": "",
      "fetch-api.js": ""
    },
    "06-error-handling": {
      "try-catch.js": "",
      "custom-errors.js": "",
      "error-debugging.md": "# Error Debugging Notes"
    },
    "07-oop-js": {
      "classes.js": "",
      "inheritance.js": "",
      "prototypes.js": ""
    },
    "08-mini-projects": {
      "todo-app": {
        "index.html": "<!DOCTYPE html>\n<html><head><title>Todo App</title></head><body></body></html>",
        "style.css": "",
        "app.js": ""
      },
      "calculator": {},
      "clock": {}
    },
    "09-testing": {
      "intro-to-jest.js": "",
      "tests": {
        "sample.test.js": ""
      }
    },
    "README.md": "# JavaScript Learning Repository",
    "package.json": `{
  "name": "javascript-learning",
  "version": "1.0.0",
  "description": "A repo to learn core JavaScript concepts",
  "main": "index.js",
  "scripts": {},
  "keywords": [],
  "author": "",
  "license": "ISC"
}`
  }
};

// Start creating files and folders
createStructure(__dirname, repoStructure);
