import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {path: '',redirectTo: '/movies',pathMatch:'full'},
  {path: 'movies', component: MoviesComponent},
  {path: 'movies/:type', component: MoviesComponent},
  {path:'search/:movieName',component: MovieSearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
