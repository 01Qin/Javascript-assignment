document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const query = document.getElementById('query').value.trim();
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await response.json();

    const target = document.getElementById('target');
    target.innerHTML = "";

    data.forEach(function(item) {
        const option = document.createElement('option');
        option.text = item.show.name;
        target.add(option);
    });
    });