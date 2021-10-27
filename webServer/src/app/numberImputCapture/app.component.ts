import { Component, OnInit } from '@angular/core';

import { DataService } from '../Services/data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  closeResult: string = "";

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
  }
  show = false;
  numberGuest: number = 1;
  numberClick: number = 0;
  Guardado() {
    if (this.numberGuest <= 0){
      this.numberClick = 0;
    }
    else{
      this.numberClick = 1;
    }
    this.dataservice.changeNumber(this.numberGuest)
  }
}
