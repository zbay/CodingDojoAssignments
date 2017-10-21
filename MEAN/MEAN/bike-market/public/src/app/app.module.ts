import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { BikeComponent } from './bike/bike.component';
import { BikeformComponent } from './bikeform/bikeform.component';
import { BrowseComponent } from './browse/browse.component';
import { MylistingsComponent } from './mylistings/mylistings.component';
import { NavComponent } from './nav/nav.component';
import { BikeformexistingComponent } from './bikeformexisting/bikeformexisting.component';

import { LoginService } from './login.service';
import { BikeService } from './bike.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    RegisterformComponent,
    BikeComponent,
    BikeformComponent,
    BrowseComponent,
    MylistingsComponent,
    HomeComponent,
    NavComponent,
    BikeformexistingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoginService, BikeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
