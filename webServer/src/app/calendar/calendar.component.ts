import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class AppCalendar implements OnInit {
  DateOfReservation:Date = new Date();
  numberClick:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  Guardado(){
    this.numberClick = 1;
    console.log(this.DateOfReservation)
  }
}
