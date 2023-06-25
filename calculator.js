const prompt = require('prompt-sync')();

const operator = prompt('Enter either + or - or * or /: ');

const num1 = parseFloat(prompt('Enter first number: '));
const num2 = parseFloat(prompt('Enter second number: '));

let output;
if(operator == '+'){
    output = num1 + num2;
}
else if(operator == '-'){
    output = num1 - num2;
}
else if(operator == '*'){
    output = num1 * num2;
}
else{
    output = num1 / num2;
}

console.log(num1 +operator +num2 +'=' +output);