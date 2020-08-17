import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  GreenHs:[{lenght:number, width:number}]
  name = 'Angular';
    constructor() {  
      this.GreenHs.push(
         {lenght:100, width:50},
         {lenght:100, width:50}) 
     }
totalSize:number
lengthmain:number
widthmain:number
totalFarmSize( length:number, width:number){
  console.log(length)
  console.log(width)
  this.lengthmain= length 
  this.widthmain = width
  this.totalSize=length* width
}
 


  ngOnInit() {
  }
}
