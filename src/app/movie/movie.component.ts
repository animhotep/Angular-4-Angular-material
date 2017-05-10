import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title }     from '@angular/platform-browser';
import {Http} from "@angular/http";

@Component({
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent implements OnInit {
  id: number;
  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private http: Http,
  ) {}

  ngOnInit() {
    let url:string;

    this.route.params.subscribe(params => {
     url = 'https://api.themoviedb.org/3/movie/'+params['id']+'?language=en-US&api_key=e442ad82538a59f2029879dbb2ee3ece';
    });

    this.http.get(url).subscribe(
      data => {
        this.movie = data.json();
        this.titleService.setTitle( this.route.snapshot.data['title'] + data.json().title );
      },
      err => console.log(err)
    );
  }

}

export class Movie{
  id: number;
  title: string;
  poster_path: string;
  homepage: string;
  budget: number;
  popularity: number;
}
