
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
        data.results})
}
movieData(apiURL)
