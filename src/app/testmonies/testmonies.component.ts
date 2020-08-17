import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'testmonies',
  templateUrl: './testmonies.component.html',
  styleUrls: ['./testmonies.component.scss']
})
export class TestmoniesComponent implements OnInit{
  name = 'Angular';
    constructor() { }

  ngOnInit() {
  }
}
