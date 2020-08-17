import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('currentPage', [
      state('action-initial', style({ width: '20%' })),
      state('action-final', style({ width: '118%' })),
      transition('action-initial => action-final', [
        animate('0.7s')
      ]),
    ])
  ]
})
export class NavComponent implements OnInit {
  name = 'Angular';
  constructor() { }

  ngOnInit() {
  }
  
  status = {
    homePage: false,
    aboutPage: false,
    projectsPage: false,
    testimonyPage: false
  }
homePage
  
  getCurrentPage(value) {
    if (value){


    }
    
  }
}
