import { Component, OnInit, Input } from '@angular/core';
import { Shop } from 'app/restaurant/shop/shop.model';
import { ShopService } from 'app/restaurant/shop/shop.service';

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  shops: Shop[];

  constructor(private shopService: ShopService) { }

  ngOnInit() {

  }

}
