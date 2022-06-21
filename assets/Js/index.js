
const baseUrl="https://api.themoviedb.org/3";
const apiKey="api_key=f6c7dffdbd70cd42fb51876ae019eae1"
const apiURL=baseUrl+"/discover/movie?sort_by=popularity.desc&"+apiKey;
console.log(apiURL);
const imageBaseUrl='https://image.tmdb.org/t/p/w500';

function movieData(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        displayCard(data.results)
        
    })
}
movieData(apiURL)

function displayCard(data){
    let movieSection=document.querySelector('#movieID')
    movieSection.innerHTML=''
    data.forEach(movie => {
        console.log(movie);
        const {title,poster_path,vote_average,overview}=movie
        const card = document.createElement('div')
        card.className='card'
        card.innerHTML=`
        <img src="${imageBaseUrl}${poster_path}" alt="">
        
        <div class="overview">
            <div class="Movietitle">
                <div>${title}</div>
                <div>${vote_average}</div>
            </div>
            <h3>OVERVIEW</h3>
            <p>
            ${overview}</p>
            
        </div>
        `
        movieSection.appendChild(card)

        
    });
}

// console.log(data.results);
// data.results.foreach(item => {
//     const movieSection=document.querySelector('.movie-cards')
//     movieSection.innerHTML=`
//     <div class="card">
//     <img src="${imageBaseUrl}${item.poster_path}" alt="">
    
//     <div class="overview">
//         <div class="Movietitle">
//             <div>${item.title}</div>
//             <div>${item.vote_average}</div>
//         </div>
//         <h3>OVERVIEW</h3>
//         <p>
//         ${item.overview}</p>
//         </p>
//     </div>


// </div>

//     `
// })
