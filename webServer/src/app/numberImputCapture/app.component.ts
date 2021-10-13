import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  numberGuest: number = 1;

  Guardado(){
    if (this.numberGuest < 0) {
      alert("Invalid number: > 0")
    }else{
      alert(this.numberGuest)
    }
  }
}
