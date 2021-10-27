import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

import { DataService } from '../Services/data.service'

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {
  id:number = 0;
  items:any;
  item:any
  closeResult: string = '';
  info:any;
  selectPark:boolean;

  @Input() listOfParks:any = []
  constructor(private modalService: NgbModal, private dataservice:DataService) { }

  ngOnInit(): void {
  }
  Selected(numberSelected: number){
    this.id = numberSelected;
  }
  open(content:any) {
    if(this.id < 1){
     this.selectPark = false;
    }else{
      this.selectPark = true;
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    }

    this.dataservice.changeId(this.id)
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
