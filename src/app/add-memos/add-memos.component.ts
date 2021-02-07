import { Component, OnInit } from '@angular/core';
import { memosService } from '../service/memos.service'

@Component({
  selector: 'app-add-memos',
  templateUrl: './add-memos.component.html',
  styleUrls: ['./add-memos.component.css']
})
export class AddMemosComponent implements OnInit {
  data: any;
  constructor(private memos: memosService) { }

  ngOnInit(): void {
  }
  add() {


    this.memos.createMemos(this.data)
      .then(res => {
        /*do something here....
        maybe clear the form or give a success message*/
        console.log(this.data)
      });
  }

}
