const execa = require('execa');

// Rechnen
const number1 = process.argv[2];
const number2 = process.argv[3];
const result = Number(number1) * Number(number2);

execa.sync('say', [`${number1} mal ${number2} ist nach Adam Riese ${result}`]);
