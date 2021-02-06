import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perso-page',
  templateUrl: './perso-page.component.html',
  styleUrls: ['./perso-page.component.css']
})
export class PersoPageComponent implements OnInit {
  current_memos: any = 1;
  constructor() { }

  ngOnInit(): void {
  }
  addMemos() {
    this.current_memos = null;
  }

}
