import { Component, OnInit, Input } from '@angular/core';
import { Shop } from 'app/restaurant/shop/shop.model';

@Component({
  selector: 'mt-shop',
  templateUrl: './shop.component.html'
})
export class ShopComponent implements OnInit {



  @Input() shop: Shop;

  constructor() { }

  ngOnInit() {
  }

}
