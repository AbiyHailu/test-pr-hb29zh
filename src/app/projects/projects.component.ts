import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  name = 'Angular';
    constructor() { }

  ngOnInit() {
  }
}
