import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { AppCalendar } from '../calendar/calendar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  closeResult: string = "";

  constructor() { }

  ngOnInit(): void {
    console.log(this.numberGuest)
  }
  show = false;
  numberGuest: number = 1;
  numberClick: number = 0;
  Guardado() {
    console.log(this.numberGuest)
    if (this.numberGuest <= 0){
      alert("Number should be above 0")
      this.numberClick = 0;
    }
    else{
      this.numberClick = 1;
    }
  }

}
