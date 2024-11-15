const startYear = parseInt(prompt("enter the start year:"))
const endYear = parseInt(prompt("enter the end year:"))

function printLeapYears() {

  const leapYearList = document.getElementById('leapYearList');
            leapYearList.innerHTML = '';

            for (let year = startYear; year <= endYear; year++) {
                if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
                    const listItem = document.createElement('li');
                    listItem.textContent = year + ' is a leap year';
                    leapYearList.appendChild(listItem);
                }
            }
        }