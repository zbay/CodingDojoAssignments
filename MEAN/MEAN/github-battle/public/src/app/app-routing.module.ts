import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { H2hComponent } from './h2h/h2h.component';
import { ResultsComponent } from './results/results.component';
import { RankingsComponent } from './rankings/rankings.component';

const routes: Routes = [{path: '', pathMatch: 'full', component: H2hComponent},
{path: 'results', pathMatch: 'full', component: ResultsComponent},
{path: 'rankings', pathMatch: 'full', component: RankingsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
