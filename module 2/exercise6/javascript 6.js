
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}


let rolls = [];
let result;

do {
    result = rollDice();
    rolls.push(result);
} while (result !== 6);


let ul = document.createElement('ul');
rolls.forEach((roll) => {
    let li = document.createElement('li');
    li.textContent = `Dice roll: ${roll}`;
    ul.appendChild(li);
});

document.body.appendChild(ul);