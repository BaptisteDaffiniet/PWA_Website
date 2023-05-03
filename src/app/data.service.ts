import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const fetchMovies = async () => {
  const movies = await fetch(
    'https://api.themoviedb.org/3/search/movie?api_key=8ef00dc66837c5154088c465b1d6412a&query=Jack+Reacher'
  ).then((res) => res.json());
  console.log(movies);
  console.log("in");
  return movies;
};

@Injectable({
  providedIn: 'root'
})

export class DataService {
  movies: never[];


  constructor(private http: HttpClient) {
    this.movies = [];
  }


  gimmeMovies() {
    return (fetchMovies);
  }
  gimmeJokes() {
    return this.http.get('https://api.chucknorris.io/jokes/random');
  }

}
