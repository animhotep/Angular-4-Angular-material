import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  id: number;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
  ) {}

  ngOnInit() {
    this.titleService.setTitle( this.route.snapshot.data['title'] + 'name' );
    this.route.params.subscribe(params => {
     this.id = +params['id'];
   })

  }

}
