
const baseUrl="https://api.themoviedb.org/3";
const apiKey="api_key=f6c7dffdbd70cd42fb51876ae019eae1"
const apiURL=baseUrl+"/discover/movie?sort_by=popularity.desc&"+apiKey;
console.log(apiURL);
const imageBaseUrl='https://image.tmdb.org/t/p/w500';
const kidsAPI=baseUrl+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&"+apiKey
console.log(kidsAPI);
const scienceFixApi=baseUrl+"/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc&"+apiKey
const upcomingAPI=baseUrl+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2024-10-22&"+apiKey
const dramaApi=baseUrl+"/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&"+apiKey
const highestRatedMOvieApi=baseUrl+"/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&"+apiKey
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
// movieKids(kidsAPI)
movieData(upcomingAPI)

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
const callMovies=document.querySelector('#callMovies')
const callSeries=document.querySelector('#callSeries')
const callKids=document.querySelector('#callKids')
const callHighestRated=document.querySelector('#callHighestRated')
// callKids.addEventListener('click',movieData(kidsAPI))
callMovies.addEventListener('click',function(){
  if (true) {
    movieData(apiURL)
    callMovies.style.background='red'
      
  }else{
    let movieSection=document.querySelector('#movieID')
    movieSection.innerHTML=''
  }
})
callSeries.addEventListener('click',function(){  if (true) {
    movieData(scienceFixApi)
    callSeries.style.background='red'
      
  }else{
    let movieSection=document.querySelector('#movieID')
    movieSection.innerHTML=''
  }})
  callKids.addEventListener('click',function(){ 
    if (true) {
        movieData(kidsAPI)
        callKids.style.backgroundColor='red'
      
  }else{
    let movieSection=document.querySelector('#movieID')
    movieSection.innerHTML=''
  }})
  callDrama.addEventListener('click',function(){ 
    if (true) {
        movieData(dramaApi)
        callDrama.style.backgroundColor='red'
      
  }else{
    let movieSection=document.querySelector('#movieID')
    movieSection.innerHTML=''
  }})
  callHighestRated.addEventListener('click',function(){ 
    if (true) {
        movieData(highestRatedMOvieApi)
        callHighestRated.style.backgroundColor='red'
      
  }else{
    let movieSection=document.querySelector('#movieID')
    movieSection.innerHTML=''
  }})
