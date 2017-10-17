import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { H2hComponent } from './h2h/h2h.component';
import { ResultsComponent } from './results/results.component';
import { RankingsComponent } from './rankings/rankings.component';
import { UserService } from './user.service';
import { UserboxComponent } from './userbox/userbox.component'

@NgModule({
  declarations: [
    AppComponent,
    H2hComponent,
    ResultsComponent,
    RankingsComponent,
    UserboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
