import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'app/restaurant-details/menu-item/menu-item';
import { ShopService } from 'app/restaurant/shop/shop.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items: Observable<MenuItem[]>;

  constructor(private shopService: ShopService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.items = this.shopService.menuOfRestaurant(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }

}
