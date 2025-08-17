import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
// import { TvShowsComponent } from './tv-shows/tv-shows.component';
// import { MyListComponent } from './my-list/my-list.component';
// import { PlayerComponent } from './player/player.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MovieCardComponent },
  // { path: 'tv-shows', component: TvShowsComponent },
  // { path: 'my-list', component: MyListComponent },
  // { path: 'watch/:id', component: PlayerComponent },
  { path: '**', redirectTo: '/home' } ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
