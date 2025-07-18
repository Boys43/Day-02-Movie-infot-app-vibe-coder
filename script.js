let movieNameField = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

// function to get data from api

let getMovie = () =>{
    let movieName = movieNameField.value; 
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;

    // if field is empty and user will not enter anything
    if (movieName.length <= 0) {
        result.innerHTML =`<h3 class="msg">Please enter movie name </h3>`
    }

    // if filed is not empty
    else{
        fetch(url)
            .then((resp)=>resp.json())
            .then((data)=>{
                // if movie is available 
                if (data.Response == "True") {
                    result.innerHTML = `
                    <div class="info">
                        <img src=${data.Poster} class="poster">
                        <div>
                            <h2>${data.Title}</h2>
                            <div class="rating">
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
                }

                // If movie does'not exist in db

                else{
                    result.innerHTML = `<h3 class="msg">Movie Does not exist</h3>`
                }
            })

            // if error occurs

            .catch(()=>{
                result.innerHTML = `<h3 class="msg">Error Occured</h3>`
            });
    }
};

searchBtn.addEventListener("click" , getMovie);
window.addEventListener("load" , getMovie);