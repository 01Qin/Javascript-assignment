'use strict';
const answer = confirm("Should I calculate the square root?");
const square = document.querySelector("#square");
if (answer) {
    const num = prompt("Enter your number: ");
    if (num >=0) {
        square.innerHTML = `The square root of ${num} is ${Math.sqrt(num)}.`;
    }
}else{
square.innerHTML = "The square root will not calculated.";
}
