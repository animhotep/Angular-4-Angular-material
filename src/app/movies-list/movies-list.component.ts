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
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e442ad82538a59f2029879dbb2ee3ece",
      "method": "GET",
      "headers": {},
      "data": "{}"
    }

    this.titleService.setTitle( this.route.snapshot.data['title'] );



    this.http.get(settings.url)
      .map(res => res.json())
      .subscribe(
        data => {this.movies = data.results;

          console.log(this.movies)
        },
        err => console.log(err),
        () => console.log('Random Quote Complete')
      );


  }

}
