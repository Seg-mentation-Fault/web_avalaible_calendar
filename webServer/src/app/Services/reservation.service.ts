import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Reservations } from '../Interfaces/reservations'

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient) { }
  conReservation(dataOfreservation:Reservations){
    const path = "http://3.93.222.241:3000/api/v1/reservation"
    return this.http.post<Reservations>(path, dataOfreservation)
  }
}
