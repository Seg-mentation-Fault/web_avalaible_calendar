import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {
  id:any;
  items:any;
  item:any
  @Input() listOfParks:any = []
  constructor() { }

  ngOnInit(): void {
  }
  Selected(numberSelected: number){
    console.log(numberSelected)
  }
}
