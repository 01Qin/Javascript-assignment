
function announceWinner(candidates) {
    let maxVotes = 0;
    let winner = null;

    candidates.forEach(candidate => {
        if (candidate.votes > maxVotes) {
            maxVotes = candidate.votes;
            winner = candidate.name;
        }
    });

    console.log(`The winner is ${winner} with ${maxVotes} votes.`);
    console.log("Results:");
    candidates.forEach(candidate => {
        console.log(`${candidate.name}: ${candidate.votes} votes`);
    });
}


const candidates = [];
const numCandidates = parseInt(prompt("Enter the number of candidates:"));


for (let i = 0; i < numCandidates; i++) {
    const name = prompt(`Name for candidate ${i + 1}:`);
    candidates.push({ name: name, votes: 0 });
}

const numVoters = parseInt(prompt("Enter the number of voters:"));


for (let i = 0; i < numVoters; i++) {
    const vote = prompt(`Voter ${i + 1}, enter the name of the candidate you want to vote for:`);

    if (vote === "") {
        continue;
    }

    const candidate = candidates.find(c => c.name === vote);
    if (candidate) {
        candidate.votes++;
    } else {
        console.log("Invalid candidate name entered. Vote discarded.");
    }
}


announceWinner(candidates);