import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DcComponent } from './dc/dc.component';
import { DalComponent } from './dal/dal.component';
import { SeaComponent } from './sea/sea.component';
import { SjComponent } from './sj/sj.component';
import { ChiComponent } from './chi/chi.component';
import { BurbankComponent } from './burbank/burbank.component';

@NgModule({
  declarations: [
    AppComponent,
    DcComponent,
    DalComponent,
    SeaComponent,
    SjComponent,
    ChiComponent,
    BurbankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
