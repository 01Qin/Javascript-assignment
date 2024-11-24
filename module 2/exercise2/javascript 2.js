const numParticipants = parseInt(prompt("Enter the number of participants: "));
let participantNames = [];

for (let i = 0; i < numParticipants; i++) {
    let name = prompt(`Enter the name of participant ${i + 1}:`);
    participantNames.push(name);
}

participantNames.sort();

let ol = document.createElement('ol');

participantNames.forEach(name => {
    let li = document.createElement('li');
    li.textContent = name;
    ol.appendChild(li);
});


document.querySelector('#ParticipantList').appendChild(ol);