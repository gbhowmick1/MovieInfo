import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { APIKEY } from './apikey';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient) { }

  SEARCHAPI = "https://api.themoviedb.org/3/search/movie?api_key=" + APIKEY + "&query=";
  getMovies(APIURL) {
    return this.http.get(APIURL);
  }
  searchMovies(searchStr){
    const searchApiUrl = this.SEARCHAPI+ searchStr;
    //console.log(searchApiUrl)
    return this.http.get(searchApiUrl);
  }

}








// USING MAP OPERATOR EXTRACTING REQUIRED FOELDDS FROM RESULTS ARRAY AND SENDING ONLY THOSE FIELDS.
// here dataArray is the observable and data is the results array.

// getMovies() {
//   return this.http.get(this.APIURL)
//     .pipe(map( (dataArray:any ) =>{
//       return dataArray.results.map( (data:any) => {
//        return { title: data.title,
//                 vote_average: data.vote_average,
//                 poster_path: this.path + data.poster_path
//         }
//       })
//     }));
// }
// }

//<img [src] = "movie.poster_path"> in html file
// this.movieService.getMovies().subscribe((response: any) => {
//   // this.movies = response.results;
//   this.movies = response;
//   console.log(this.movies);

// });
// }
// in MovieSearchComponent.ts file
// if u want to process the data using map operator and send
// only some specific fields from the data array then u need to follow this approach
// where title, vote_average and poster_path are sent to the MovieSearchComponent.ts file .
