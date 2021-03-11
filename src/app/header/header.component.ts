import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }
  inputText='';
  popularMovies:string='popular';
  trendingMovies:string='trending';
  topratedMovies:string='toprated';

  ngOnInit(): void {
  }
  popular(){
    this.router.navigate(['/movies',this.popularMovies]);
  }
  trending(){
    this.router.navigate(['/movies',this.trendingMovies]);
  }
  toprated(){
    this.router.navigate(['/movies',this.topratedMovies]);
  }
  fetchMovie(movieName){
    this.inputText='';
    this.router.navigate(['/search',movieName]);
  }
}

