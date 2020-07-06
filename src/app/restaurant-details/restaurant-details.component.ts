import { Component, OnInit } from '@angular/core';
import { Shop } from 'app/restaurant/shop/shop.model';
import { ShopService } from 'app/restaurant/shop/shop.service';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-details',
  templateUrl: './restaurant-details.component.html'
})
export class RestaurantDetailsComponent implements OnInit {

  constructor(private shopService: ShopService, private router: ActivatedRoute) { }

  shop: Shop;

  ngOnInit() {
    this.shopService.shopById(this.router.snapshot.params['id']).subscribe(shop => this.shop = shop);
  }
}
