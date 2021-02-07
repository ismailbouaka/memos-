import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'memos';
  isconnected: Boolean = false;

  ngOnInit(){
    const user = firebase.default.auth().currentUser;

    if(user){
      this.isconnected = true;

    }else{
      this.isconnected = false;
    }
  }
}
