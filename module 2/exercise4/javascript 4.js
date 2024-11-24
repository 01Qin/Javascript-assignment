let num = [];
let inputnum = parseInt(prompt("please enter a number or enter 0 to quit: "));
while (inputnum !== 0) {
  num.push(inputnum);
  inputnum = parseInt(prompt("please enter a number or enter 0 to quit: "));
}
num.sort((a, b) => b - a);
console.log("numbers from largest to smallest: ")
num.forEach(num => {
  console.log(num);
})
