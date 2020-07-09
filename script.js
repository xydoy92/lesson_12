// First task

let yourNumber = +prompt("Enter your number");
let yourPlus = +prompt("Add to the number");
let yourMinus = +prompt("Subtract from the number");
let yourMultiply = +prompt("Multiply by");
let yourDivide = +prompt("Divide by");
let yourResult = (yourNumber + yourPlus - yourMinus) * yourMultiply / yourDivide;
alert(`(${yourNumber} + ${yourPlus} - ${yourMinus})*${yourMultiply}/${yourDivide} = ${yourResult}`);

// Second task

let justANumber = 1;
let justAString = "1";
let justABoolean = true;
console.log(`Переменная justANumber имеет тип ${typeof justANumber}`);
console.log(`Переменная justAString имеет тип ${typeof justAString}`);
console.log(`Переменная justABoolean имеет тип ${typeof justABoolean}`);

// Additional task

let firstNumber = 3;
let secondNumber = 4;
console.log(String(firstNumber) + String(secondNumber));