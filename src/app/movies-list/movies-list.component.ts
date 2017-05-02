import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
  ) {}

  ngOnInit() {
    this.titleService.setTitle( this.route.snapshot.data['title'] );
  }

}
