function checkLeapYear() {
const year = document.getElementById('yearInput').value;
 if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
 document.getElementById('result').innerText = year + ' is a leap year.';
} else {
document.getElementById('result').innerText = year + ' is not a leap year.';
}
}