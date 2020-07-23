import { Component, OnInit, Input } from '@angular/core';
import { Shop } from 'app/restaurant/shop/shop.model';
import { transition, trigger, state, style, animate } from '@angular/animations';

@Component({
  selector: 'mt-shop',
  templateUrl: './shop.component.html',
  animations: [
    trigger('appear', [
      state('ready', style({
        opacity: 1,
      })),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px,-10px)' }),
        animate('500ms 0s ease-in-out')
      ]),
    ])
  ]
})
export class ShopComponent implements OnInit {

  shopState = 'ready';

  @Input() shop: Shop;

  constructor() { }

  ngOnInit() {
  }

}
