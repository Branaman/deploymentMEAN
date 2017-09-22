import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';
import {Note} from './note';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()

export class NoteManagerService {
  notes:Array<Note> = [];
  sortednotes:Array<Note> = [];
  noteInstance:Note;
  taskObserver = new BehaviorSubject(this.notes)
  constructor(private _http:Http) { }
  sorted(array:Array<Note>): Array<Note> {
    function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
    }
    return array.sort(dynamicSort("-created_at"))
  }
  retrieveNotes(){
    this._http.get('http://localhost:8147/notes').subscribe(
      (response) => {
        this.notes = response.json();
        this.sortednotes = this.sorted(this.notes)
        this.taskObserver.next(this.sortednotes);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  retrieveNote(id,callback){
    this._http.get('http://localhost:8147/notes/'+id).subscribe(
      (response) => {
        this.noteInstance = response.json();
        callback(this.noteInstance);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  createNote(note){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post('http://localhost:8147/notes', note, options).subscribe(
      (response) => {
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
