import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Park } from '../Interfaces/park'

@Injectable({
  providedIn: 'root'
})
export class ParksService {
 
  constructor(private http: HttpClient) { }
  Allpark(parks:Park){
    const path = "http://3.93.222.241:3000/api/v1/parkcapacity/availability"
    return this.http.post<Park>(path, parks)
  }
}
