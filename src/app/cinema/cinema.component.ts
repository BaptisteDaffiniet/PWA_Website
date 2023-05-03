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
  movies: any;
  searchQuery: any

  constructor(private data: DataService, private http: HttpClient) {

  }

  fetchMovies(searchQuery: any) {
    this.http
      .get("https://api.themoviedb.org/3/search/movie?api_key=8ef00dc66837c5154088c465b1d6412a&query=" + searchQuery)
      .subscribe(res => this.movies = res);
  }
}
