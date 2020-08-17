import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FadeInAnimation } from './animations/animations';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    FadeInAnimation
  ]
})
export class AppComponent {
  name = 'Angular';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
