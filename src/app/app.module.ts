import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Component} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieComponent } from './movie/movie.component';


const routes: Routes = [
  { path: 'movies',  component: MoviesListComponent, data: { title: 'Movies list' } },
  { path: 'movies/:id',  component: MovieComponent, data: { title: 'Movie ' }  },
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
