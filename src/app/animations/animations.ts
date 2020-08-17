import { trigger, state, style, animate, transition, query, group, keyframes } from '@angular/animations';
import { animateChild } from '@angular/animations';
export const FadeInAnimation =
  trigger('routeAnimations', [
     /* state('HomePage', style({ opacity: 0 })),
     state('AboutPage', style({ opacity: 0 })), */  
    transition('* <=> *', [
      animate('1.2s', keyframes([
        style({ opacity: 0, offset: 0 }),
        style({ opacity: 0.25, offset: 0.25 }),
        style({ opacity: 0.5, offset: 0.5 }),
        style({ opacity: 0.75, offset: 0.75 }),
        style({ opacity: 1, offset: 1 })
      ])
      )
    ]),



    /*   transition('HomePage <=> AboutPage', [
        style({ opacity: 0 }),
        query(':enter, :leave', [
          style({ opacity: 1 })
        ]),
        query(':enter', [
          style({ opacity: 0 })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('2000ms ease-out', keyframes([
                style({ opacity: 1, offset: 0 }),
                style({ opacity: 0.5, offset: 0.5}),
                style({ opacity: 0, offset: 1})
              ])
              )
          ]),
          query(':enter', [
            animate('2000ms ease-out', keyframes([
                 style({ opacity: 0 }),
                style({opacity: 0.5 }),
                style({ opacity: 1})
              ])
  )
          ])
        ]),
        query(':enter', animateChild()),
      ]), */

  ]);