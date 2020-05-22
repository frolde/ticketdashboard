import {
    animation, trigger, animateChild, group,
    transition, animate, style, query, state
} from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('HomePage => *', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    opacity: 1,
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ opacity: 0 })
            ]),
            query(':leave', animateChild(), { optional: true }),
            group([
                query(':leave', [
                    animate('250ms ease-in-out', style({ opacity: 0 }))
                ], {optional: true}),
                query(':enter', [
                    animate('250ms 250ms ease-in-out', style({ opacity: 1  }))
                ])
            ]),
            query(':enter', animateChild(),  { optional: true }),
        ]),
        transition('* => HomePage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    opacity: 1,
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ opacity: 0 })
            ]),
            query(':leave', animateChild(), { optional: true }),
            group([
                query(':leave', [
                    animate('250ms 500ms ease-in-out', style({ opacity: 0 }))
                ], {optional: true}),
                query(':enter', [
                    animate('250ms 500ms ease-in-out', style({ opacity: 1  }))
                ])
            ]),
            query(':enter', animateChild(),  { optional: true }),
        ]),
        transition('* <=> DetailPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    opacity: 1,
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ opacity: 0 })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('250ms ease-in-out', style({ opacity: 0 }))
                ], {optional: true}),
                query(':enter', [
                    animate('250ms 250ms ease-in-out', style({ opacity: 1  }))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
        transition('ListPage <=> UserPage', [
            style({ position: 'relative' }),
            query(':enter, :leave', [
                style({
                    position: 'absolute',
                    opacity: 1,
                    top: 0,
                    left: 0,
                    width: '100%'
                })
            ]),
            query(':enter', [
                style({ opacity: 0 })
            ]),
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('150ms ease-in-out', style({ opacity: 0 }))
                ], {optional: true}),
                query(':enter', [
                    animate('100ms 100ms ease-in-out', style({ opacity: 1  }))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
    ]);

export const fadeInAnimation =
    trigger('fadeIn', [

        state('in', style({opacity: 1})),

        transition(':enter', [
            style({opacity: 0}),
            animate(200 )
        ]),

        transition(':leave',
            animate(200, style({opacity: 0})))
    ]);
