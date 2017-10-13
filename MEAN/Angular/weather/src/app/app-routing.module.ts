import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DcComponent } from './dc/dc.component';
import { SjComponent } from './sj/sj.component';
import { BurbankComponent } from './burbank/burbank.component';
import { ChiComponent } from './chi/chi.component';
import { DalComponent } from './dal/dal.component';
import { SeaComponent } from './sea/sea.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dc' },
  { path: 'dc', pathMatch: 'full', component: DcComponent},
  { path: 'sanjose', pathMatch: 'full', component: SjComponent},
  { path: 'burbank', pathMatch: 'full', component: BurbankComponent},
  { path: 'chicago', pathMatch: 'full', component: ChiComponent },
  { path: 'dallas', pathMatch: 'full', component: DalComponent },
  { path: 'seattle', pathMatch: 'full', component: SeaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
