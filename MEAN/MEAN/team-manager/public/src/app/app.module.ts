import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { NewPlayerComponent } from './new-player/new-player.component';
import { ListComponent } from './list/list.component';
import { StatusesComponent } from './statuses/statuses.component';
import { GameComponent } from './game/game.component';
import { PlayersService } from './players.service';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    NewPlayerComponent,
    ListComponent,
    StatusesComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
