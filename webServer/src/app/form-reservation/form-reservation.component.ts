import { Component, OnInit } from '@angular/core';

import { DataService } from '../Services/data.service'
import { ReservationService } from '../Services/reservation.service'

@Component({
  selector: 'app-form-reservation',
  templateUrl: './form-reservation.component.html',
  styleUrls: ['./form-reservation.component.css']
})
export class FormReservationComponent implements OnInit {
  numberGuest:number = 0;
  date:string = "";
  firstname:string = "";
  lastname:string = "";
  email:string = "";
  id:number = 0;
  confirmation:any = [];

  constructor(private dataservice:DataService, private reservation:ReservationService) { }

  ngOnInit(): void {
    this.dataservice.currentMessage.subscribe(numberGuest => this.numberGuest = numberGuest)
    this.dataservice.currentDate.subscribe(date => this.date = date)
    this.dataservice.currentid.subscribe(id => this.id = id)
  }

  confirmReservation(){
    const dataReservation = {
      firstName: this.firstname,
      lastName:this.lastname,
      email:this.email,
      numOfGuests:this.numberGuest,
      date:this.date,
      ParkId:this.id,
    }
    this.reservation.conReservation(dataReservation).subscribe(data =>{
      console.log(data);
    })
  }

}
