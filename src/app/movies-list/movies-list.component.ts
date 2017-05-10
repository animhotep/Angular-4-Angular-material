import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";

@Component({
  selector: 'movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent implements OnInit {
  movies: Movie[];

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private http: Http
  ) {}

  ngOnInit() {
    let url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e442ad82538a59f2029879dbb2ee3ece';

    this.titleService.setTitle(this.route.snapshot.data['title']);

    this.http.get(url).subscribe(
      data => this.movies = data.json().results,
      err => console.log(err)
    );

  }

}

export class Movie{
  id: number;
  title: string;
  poster_path: string;
  overview: string;
}
