import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class AppCalendar implements OnInit {
  DateOfReservation:string = ""
  constructor() { }

  ngOnInit(): void {
  }
}
