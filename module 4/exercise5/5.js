fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => {
        const joke = data.value;
        console.log(joke);
    })
    .catch(error => console.error('Error fetching Chuck Norris joke:', error));