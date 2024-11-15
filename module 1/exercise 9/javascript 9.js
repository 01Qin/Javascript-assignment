const num = parseInt(prompt("enter a number"));
if (num > 1) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num);i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      alert("the number"  + num+  "is a prime number.");
      document.body.innerHTML += `The number ${num} is a prime number.`;
    }

  else{
   alert("the number"  + num+  "is not a prime number.");
   document.body.innerHTML += `The number ${num} is ${isPrime ? 'a prime number' : 'not a prime number'}.`;
  }
}
else{
    alert("the number" + num+  "is not a prime number.");
    document.body.innerHTML += `The number ${num} is not a prime number.`;
}
