// MathAlert task

let userInitialNumber = +prompt("Enter your number");
let userNumberToAdd = +prompt("Add to the number");
let userNumberToSubtract = +prompt("Subtract from the number");
let userNumberToMultiply = +prompt("Multiply by");
let userNumberToDivide = +prompt("Divide by");
let userResult = (userInitialNumber + userNumberToAdd - userNumberToSubtract) * userNumberToMultiply / userNumberToDivide;
alert(`(${userInitialNumber} + ${userNumberToAdd} - ${userNumberToSubtract})*${userNumberToMultiply}/${userNumberToDivide} = ${userResult}`);

// TypeofConsoleOut task

let typeValueNumber = 1;
let typeValueString = "1";
let typeValueBoolean = true;
console.log(`Переменная justANumber имеет тип ${typeof typeValueNumber}`);
console.log(`Переменная justAString имеет тип ${typeof typeValueString}`);
console.log(`Переменная justABoolean имеет тип ${typeof typeValueBoolean}`);

// NumberToString task

let firstNumberToString = 3;
let secondNumberToString = 4;
console.log(String(firstNumberToString) + String(secondNumberToString));