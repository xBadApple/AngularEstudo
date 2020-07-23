import { Component, OnInit, Input } from '@angular/core';
import { Shop } from 'app/restaurant/shop/shop.model';
import { ShopService } from 'app/restaurant/shop/shop.service';
import { transition, animate, trigger, style, state } from '@angular/animations';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  animations: [
    trigger('restaurantsAppeared', [
      state('ready', style({opacity: 1})),
      transition('void => ready', [
        style({ opacity: 0, transform: 'translate(-30px, -10px)' }),
        animate('300ms 0s easy-in-out')
      ])
    ])
  ]
})
export class RestaurantComponent implements OnInit {

  shops: Shop[];
  restaurantState = 'ready';

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.shopService.shops().subscribe(shops => this.shops = shops);
  }

}
