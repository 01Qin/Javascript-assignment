
function rollDice(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}


const numSides = parseInt(prompt("Enter the number of sides on the dice:"));

let rolls = [];
let result;

do {
    result = rollDice(numSides);
    rolls.push(result);
} while (result !== numSides);


let ul = document.createElement('ul');
rolls.forEach((roll) => {
    let li = document.createElement('li');
    li.textContent = `Dice roll: ${roll}`;
    ul.appendChild(li);
});

document.body.appendChild(ul);