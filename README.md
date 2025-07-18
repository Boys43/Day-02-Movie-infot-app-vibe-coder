# Day-02-Movie-info-app-vibe-coder
🎬 Day 02: Movie Info App – Vibe Coder Built a simple movie information app using HTML, CSS, and JavaScript. It fetches movie data using an API and displays the title, poster, rating, and more. A perfect beginner project to practice API calls and DOM manipulation.

## 🎬 OMDb API Integration

### 🔗 API URL
`http://www.omdbapi.com/?i=tt3896198&apikey=49b7c823`

Use this URL to fetch movie data from the OMDb API using the IMDb ID.

### 🌐 OMDb API Website
[Visit OMDb API](https://www.omdbapi.com/)

A powerful RESTful web service to obtain movie information.

---

### ✒️ Google Font – Kumbh Sans

```css
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@100..900&display=swap');

```css
`
    <div class="info">
        <img src=${data.Poster} class="poster">
        <div>
            <h2>${data.Title}</h2>
            <div class="rating">git gi
                <img src="star.svg">
                <h4>${data.imdbRating}</h4>
            </div>
            <div class="details">
                <span>${data.Rated}</span>
                <span>${data.Year}</span>
                <span>${data.Runtime}</span>
            </div>
            <div class="genre">
                <div>${data.Genre.split(",").join("</div><div>")}</div>
            </div>
        </div>
    </div>
    <h3>Plot:</h3>
    <p>${data.Plot}</p>
    <h3>Cast:</h3>
    <p>${data.Actors}</p>
`;