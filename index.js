const execa = require('execa');

// Rechnen
const number1 = process.argv[2];
const number2 = process.argv[3];
const result = Number(number1) + Number(number2);

execa.sync('say', [`${number1} plus ${number2} ist erstaunlicherweise ${result}`]);
