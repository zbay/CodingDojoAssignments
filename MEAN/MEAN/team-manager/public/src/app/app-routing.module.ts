import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { StatusesComponent } from './statuses/statuses.component';
import { ListComponent } from './list/list.component';
import { NewPlayerComponent } from './new-player/new-player.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/players/list'},
  {
    path: 'players', component: PlayersComponent,
    children: [
      {path: 'list', component: ListComponent},
      {path: 'addplayer', component: NewPlayerComponent}
    ]},
  {path: 'status/game/:id', pathMatch: 'full', component: StatusesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
