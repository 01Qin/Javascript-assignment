const numParticipants = parseInt(prompt("Enter the number of participants: "));
let participantNames = [];

for (let i = 0; i < numParticipants; i++) {
    let name = prompt(`Enter the name of participant ${i + 1}:`);
    participantNames.push(name);
}

participantNames.sort();

document.querySelector('#Participant').innerHTML = `the name of
 participant are: ${participantNames}`