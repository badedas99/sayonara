const execa = require('execa');
// input shit
const operationType = process.argv[3]
const number1 = process.argv[2];
const number2 = process.argv[4];
let result;
// calculation shit
if (operationType === "plus") {
  result = Number(number1) + Number(number2);
} else if (operationType === "minus") {
  result = Number(number1) - Number(number2);
} else if (operationType === "mal") {
  result = Number(number1) * Number(number2);
} else if (operationType === "durch") {
  result = Number(number1) / Number(number2);
};
// result shit
//const result = Number(number1) * Number(number2);

execa.sync('say', [`${number1} ${operationType} ${number2} ist nach Adam Riese ${result} ... krank`]);
