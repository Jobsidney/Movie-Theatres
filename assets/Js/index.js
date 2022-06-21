
const baseUrl="https://api.themoviedb.org/3";
const apiKey="api_key=f6c7dffdbd70cd42fb51876ae019eae1"
const apiURL=baseUrl+"/discover/movie?sort_by=popularity.desc&"+apiKey;
console.log(apiURL);
const imageBaseUrl='https://image.tmdb.org/t/p/w500';
const kidsAPI=baseUrl+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&"+apiKey
console.log(kidsAPI);
function movieData(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        displayCard(data.results)
        
    })
}
function movieKids(url){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.results);
        displayCard(data.results)
        
    })

}
movieKids(kidsAPI)
// movieData(apiURL)

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
                <div class="title">${title}</div>
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