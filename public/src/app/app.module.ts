import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import {NoteManagerService} from './note-manager.service'

import { AppComponent } from './app.component';
import { NoteListComponent } from './note/note-list/note-list.component';
import { NoteComponent } from './note/note.component';
import { NoteAddComponent } from './note/note-add/note-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteListComponent,
    NoteComponent,
    NoteAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [NoteManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
