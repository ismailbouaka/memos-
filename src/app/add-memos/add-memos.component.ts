import { Component, OnInit } from '@angular/core';
import { memosService } from '../service/memos.service'

@Component({
  selector: 'app-add-memos',
  templateUrl: './add-memos.component.html',
  styleUrls: ['./add-memos.component.css']
})
export class AddMemosComponent implements OnInit {
  data: any;
  constructor(private memosService: memosService) { }

  ngOnInit(): void {
  }
  add() {


    this.memosService.createMemos(this.data)
      .then(res => {
        /*do something here....
        maybe clear the form or give a success message*/
        console.log(this.data)
      });
  }

}
