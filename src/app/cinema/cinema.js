const form = document.getElementById('searchForm')
const searchInput = document.getElementById('searchInput')
const result = document.getElementById('result')

let search = "star wars"
let movie = [];


const fetchMovies = async () => {
    movies = await fetch('https://api.themoviedb.org/3/search/movie?api_key=8ef00dc66837c5154088c465b1d6412a&query=Jack+Reacher').then((res) => res.json());
    console.log(movies);
}
console.log("launched")
fetchMovies();