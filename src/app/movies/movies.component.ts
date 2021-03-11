import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from '../movie.service';
import { APIKEY } from '../apikey';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  searchType;
  movies;
  APIURL= "https://api.themoviedb.org/3/movie/now_playing?api_key=" + APIKEY + "&language=en-US"; //now playing
  toprated = "https://api.themoviedb.org/3/movie/top_rated?api_key=" + APIKEY + "&language=en-US"; // top rated
  popular = "https://api.themoviedb.org/3/movie/popular?api_key=" + APIKEY + "&language=en-US"; // popular
  trending = "https://api.themoviedb.org/3/trending/all/day?api_key="+ APIKEY; //trending
  constructor(private movieService:MovieService, public route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      if(paramMap.has('type')){
        this.searchType = paramMap.get('type');
        if(this.searchType==='trending'){
          this.APIURL = this.trending;
        }
        if(this.searchType==='popular'){
          this.APIURL = this.popular;
        }
        if(this.searchType==='toprated'){
          this.APIURL = this.toprated;
        }

        this.movieService.getMovies(this.APIURL).subscribe((response: any) => {
          this.movies = response.results;
          console.log(this.movies);
        });
      } else {
        this.movieService.getMovies(this.APIURL).subscribe((response: any) => {
          this.movies = response.results;
          console.log(this.movies);
        });
      }

    });

  }
}
