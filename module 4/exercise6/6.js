document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const query = document.getElementById('query').value.trim();
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
    const data = await response.json();

    const jokesList = document.getElementById('jokesList');
    jokesList.innerHTML = '';

    data.result.forEach(joke => {
        const article = document.createElement('article');
        const p = document.createElement('p');
        p.textContent = joke.value;
        article.appendChild(p);
        jokesList.appendChild(article);
    });
});