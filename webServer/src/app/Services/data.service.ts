import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private messageSource = new BehaviorSubject<any>(69)
  private DateSource = new BehaviorSubject<any>("")
  private idSource = new BehaviorSubject<any>("")
  currentMessage = this.messageSource.asObservable();
  currentDate = this.DateSource.asObservable();
  currentid = this.idSource.asObservable();

  constructor() { }

  changeDate(date: string) {
    this.DateSource.next(date)
  }
  changeNumber(numberGuest:number){
    this.messageSource.next(numberGuest)
  }
  changeId(id:number){
    this.idSource.next(id)
  }
}
