let num = new Set();
let allNumbers = [];
let duplicateFound = false;

while (true) {
  let inputnum = parseInt(prompt("Enter a number"));

  if (num.has(inputnum)) {
    console.log(`Number ${inputnum} has already been entered.`);
    duplicateFound = true;
    break;
  } else {
    num.add(inputnum);
    allNumbers.push(inputnum);
  }
}

console.log("All unique numbers entered:");
let sortednum = [...num].sort((a, b) => a - b);
sortednum.forEach((n) => {
  console.log(n);
});

if (!duplicateFound) {
  console.log("All numbers entered:");
  allNumbers.forEach((n) => {
    console.log(n);
  });
}