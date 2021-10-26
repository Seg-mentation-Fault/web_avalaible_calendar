import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  closeResult: string = "";

  constructor() { }

  ngOnInit(): void {
  }
  show = false;
  numberGuest: number = 1;
  numberClick: number = 0;
  Guardado() {
    if (this.numberGuest <= 0){
      alert("Number should be above 0")
      this.numberClick = 0;
    }
    else{
      this.numberClick = 1;
    }
  }

}
