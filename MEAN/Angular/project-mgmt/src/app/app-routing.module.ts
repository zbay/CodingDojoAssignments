import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { NewproductComponent } from './newproduct/newproduct.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'products', pathMatch: 'full', component: ProductlistComponent },
  { path: 'products/edit/:id', pathMatch: 'full', component: ProducteditComponent},
  { path: 'products/new', pathMatch: 'full', component: NewproductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
