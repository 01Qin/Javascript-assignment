function even(numbersArray) {
    let evenNumbers = numbersArray.filter(num => num % 2 === 0);
    return evenNumbers;
}


const numbers = [2, 7, 4];


const evenNumbers = even(numbers);


console.log("Original array:");
console.log(numbers);

console.log("Array with even numbers:");
console.log(evenNumbers);