import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import {NgForm} from '@angular/forms'
import {NoteManagerService} from '../../note-manager.service';
import {Note} from '../../note';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.css']
})
export class NoteAddComponent implements OnInit {
  noteInstance:Note = new Note();
  subscription:Subscription;
  constructor(private _router:Router, private _route:ActivatedRoute, private _notemanagerService:NoteManagerService) {
  }

  ngOnInit() {
  }
  onSubmit(){
    this._notemanagerService.createNote(this.noteInstance);
    this.noteInstance = new Note();
    this._notemanagerService.retrieveNotes();
  }
}
