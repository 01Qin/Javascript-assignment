function concat(stringsArray) {
    let concatenatedString = "";

    for (let i = 0; i < stringsArray.length; i++) {
        concatenatedString += stringsArray[i];
    }

    return concatenatedString;
}


const strings = ["Johnny", "DeeDee", "Joey", "Marky"];


const result = concat(strings);


const p = document.createElement('p');
p.textContent = result;

document.body.appendChild(p);