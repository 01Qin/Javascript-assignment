const numofDice = prompt("Enter the number of dice: ");
const sumofDice = +prompt("Enter the sum of dice: ");

let hitNo = 0;
const hitLimit = 10000;
for (let i = 0; i < hitLimit; i++) {
    let sum = 0;
    for (let j = 0; j < numofDice; j++) {
        const dice = Math.floor(Math.random() * 6) + 1;
        sum += dice;
    }
    if (sum ===sumofDice) hitNo ++;
    console.log(sum, sumofDice);
}
const probability = (hitNo/hitLimit) * 100;
document.querySelector('#dice').innerHTML = `Probability: ${sumofDice} with ${numofDice} is ${probability}`;
