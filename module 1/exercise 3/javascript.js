let x = parseInt(prompt("Enter the first number: "));
let y = parseInt(prompt("Enter the second number: "));
let z = parseInt(prompt("Enter the third number: "));

plus = x + y + z
average = (x + y + z) / 3
product = x * y * z;

document.querySelector('#plus').innerHTML = `The summation is: ${plus}.`;
document.querySelector('#average').innerHTML = `The average is: ${average}.`;
document.querySelector('#product').innerHTML = `The multiplication is: ${product}.`;