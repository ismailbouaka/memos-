import { SharedService } from './service/Shared.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'memos';
  isconnected: Boolean = false;
  ss: SharedService
  constructor(ss: SharedService){
    this.ss = ss
  }

  ngOnInit(){
    this.ss.getEmittedValue().subscribe((item: Boolean) => this.isconnected = item)
  }
}
