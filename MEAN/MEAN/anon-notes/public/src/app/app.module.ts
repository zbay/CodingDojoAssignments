import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NoteService } from './note.service';

import { AppComponent } from './app.component';
import { NoteformComponent } from './noteform/noteform.component';
import { NotelistComponent } from './notelist/notelist.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteformComponent,
    NotelistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }