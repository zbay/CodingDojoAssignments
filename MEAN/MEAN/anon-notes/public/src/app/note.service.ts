import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NoteService {
  notes = [];

  constructor(private _http: Http) { }

  newNote(data){
    return this._http.post("/note", data)
      .map((response) => response.json())
      .toPromise();
  }

  getNotes(){
    return this._http.get("/notes")
      .map((response) => response.json())
      .toPromise();
  }
}
