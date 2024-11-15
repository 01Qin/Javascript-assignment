function rollDice() {
const numDice = parseInt(document.getElementById('numDice').value);
let sum = 0;

for (let i = 0; i < numDice; i++) {

const rollResult = Math.floor(Math.random() * 6) + 1;
sum += rollResult;}
document.getElementById('result').innerText = `Sum of dice rolls: ${sum}`;
        }