import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';



@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent {
  result = document.getElementById("result");
  movies: any;
  searchQuery: any
  htmlContent: any;
  totalResults: any;

  constructor(private data: DataService, private http: HttpClient) {

  }

  fetchMovies(searchQuerySent: any) {

    this.htmlContent = "";

    this.searchQuery = searchQuerySent;
    this.http
      .get("https://api.themoviedb.org/3/search/movie?api_key=8ef00dc66837c5154088c465b1d6412a&query=" + this.searchQuery)
      .subscribe(res => {
        this.movies = res;
        this.totalResults = this.movies.total_results;
        for (let movie of this.movies.results) {
          this.htmlContent += `          
          <li>
          <h2>${movie.original_title}</h2>
          <div class="card-content">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"></img>
            <div class="infos">
              <p>${movie.overview}</p>
              <p>Popularité : ${movie.popularity} ⭐</p>
            </div>
          </div>
        </li>
          `
        }
      }
      );
  }
}
