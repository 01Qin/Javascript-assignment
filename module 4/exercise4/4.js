document.getElementById('searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const query = document.getElementById('query').value.trim();
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    const data = await response.json();

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    data.forEach(result => {
        const tvShow = result.show;

        const article = document.createElement('article');

        // Name
        const nameHeader = document.createElement('h2');
        nameHeader.textContent = tvShow.name;
        article.appendChild(nameHeader);

        // Link to details
        const detailsLink = document.createElement('a');
        detailsLink.href = tvShow.url;
        detailsLink.textContent = "Link to details";
        detailsLink.target = "_blank";
        article.appendChild(detailsLink);

        // Image
        const imageSrc = tvShow.image ? tvShow.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';
        const imageAlt = tvShow.name;
        const image = document.createElement('img');
        image.src = imageSrc;
        image.alt = imageAlt;
        article.appendChild(image);

        // Summary
        const summaryDiv = document.createElement('div');
        summaryDiv.innerHTML = tvShow.summary;
        article.appendChild(summaryDiv);

        resultsContainer.appendChild(article);
    });
});