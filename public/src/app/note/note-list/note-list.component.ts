import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';
import {NoteManagerService} from '../../note-manager.service';
import {Note} from '../../note';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notesInstance:Note[] = [];
  subscription: Subscription;

  constructor(private _route: ActivatedRoute, private _notemanagerService: NoteManagerService) {
    this._notemanagerService.taskObserver.subscribe(
      (data)=>{
        this.notesInstance=data;
      }
    )
  }

  ngOnInit() {
    this.getNotes();
  }
  getNotes():void {
    this._notemanagerService.retrieveNotes();
  }
}
