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

    this.route.params.subscribe(params => {
     this.id = +params['id'];
    });

    this.http.get('https://api.themoviedb.org/3/movie/'+this.id+'?language=en-US&api_key=e442ad82538a59f2029879dbb2ee3ece')
      .map(res => res.json())
      .subscribe(
        data => {
          this.movie = data;
          this.titleService.setTitle( this.route.snapshot.data['title'] + data.title );
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
