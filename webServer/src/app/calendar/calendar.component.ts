import { Component, OnInit, Input } from '@angular/core';
import * as moment from 'moment'
import {FormGroup, FormControl} from '@angular/forms';

import { ParksService } from '../Services/parks.service'

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class AppCalendar implements OnInit {
  DateOfReservation:Date = new Date();
  numberClick:number = 0;
  listOfParks:any = [];

  constructor(private parkService:ParksService) { }
  @Input() numberGuest: number = 1;
  ngOnInit(): void {
  }
  
  ConfirmDate(){
    this.numberClick = 1;
    // Reset type Date
    const newDate = moment(this.DateOfReservation).format('YYYY-MM-DD')
    // Object of data post
    const guestanddata = {
      numOfGuests: this.numberGuest,
      date: newDate
    }
    // Send post
    this.listOfParks = []

    this.parkService.Allpark(guestanddata).subscribe(data =>{
      this.listOfParks.push(data) 
    })
    console.log(this.listOfParks)
  }
}
