
import { environment } from './../environments/environment';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'memos';
  isconnected: Boolean = false;

  constructor() {
  }

  ngAfterContentChecked() {

    const user = firebase.default.auth().currentUser;

    if (user) {
      this.isconnected = true;

    } else {
      this.isconnected = false;
    }
  }

  ngOnInit() {
    //this.ss.getEmittedValue().subscribe((item: Boolean) => this.isconnected = item)
    firebase.default.initializeApp(environment.firebase);


    if (!firebase.default.app.length) {
      firebase.default.initializeApp(environment.firebase);
    } else {
      firebase.default.app()
    }
  }
}
