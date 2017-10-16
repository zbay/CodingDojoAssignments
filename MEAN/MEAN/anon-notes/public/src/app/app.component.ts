import { Component } from '@angular/core';
import { NoteService } from './note.service';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  notes: Array<Note> = [];
  constructor(private _noteService: NoteService){}

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void{
    this._noteService.getNotes()
      .catch( err => { 
        console.log( "Error: NotesComponent: get_all_notes:", err ); 
      })
      .then( data => { 
        this.notes = data;
        console.log(this.notes); 
      });
  }
  submitNote(data): void{
    console.log("submitting note...");
    this._noteService.newNote(data)
      .catch( err => { 
        console.log( "Error: NotesComponent: create_notes:", err ); 
      })
      .then( () => {
         console.log("getting notes again...");
         this.getNotes(); 
      });
  }
}
