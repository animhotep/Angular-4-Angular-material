import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";
import {Http} from "@angular/http";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent implements OnInit {
  movies;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private http: Http
  ) {}

  ngOnInit() {
    this.titleService.setTitle(this.route.snapshot.data['title']);

    this.http.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e442ad82538a59f2029879dbb2ee3ece')
      .map(res => res.json())
      .subscribe(
        data => this.movies = data.results,
        err => console.log(err)
      );


  }

}
