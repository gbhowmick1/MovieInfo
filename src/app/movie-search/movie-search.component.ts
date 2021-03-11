import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
})
export class MovieSearchComponent implements OnInit {
  searchMovie;
  movies: any;
  constructor(private movieService:MovieService, public route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      if(paramMap.has('movieName')){
        this.searchMovie = paramMap.get('movieName');
        // console.log(this.searchStr);
        this.movieService.searchMovies(this.searchMovie).subscribe((response: any) => {
          this.movies = response.results;
          console.log(this.movies);
        });
      }
    });
  }
}
