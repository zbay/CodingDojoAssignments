import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MylistingsComponent } from './mylistings/mylistings.component';
import { BrowseComponent } from './browse/browse.component';

const routes: Routes = [{path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'browse', pathMatch: 'full', component: BrowseComponent},
  {path: 'listings', pathMatch: 'full', component: MylistingsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
