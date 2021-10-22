import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Selected(numberSelected: number){
    console.log(numberSelected)
  }
}
