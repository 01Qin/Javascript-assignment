
let nums = [];

for (let i = 1; i <= 5; i++) {
  let num = prompt("Enter a number:");
  nums.push(num);
}


console.log("Numbers in reverse order:");
for (let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i]);
}
