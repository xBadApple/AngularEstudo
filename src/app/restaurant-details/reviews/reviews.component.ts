import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ShopService } from 'app/restaurant/shop/shop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private shopService: ShopService, private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.shopService.reviewOfRestaurant(this.activeRouter.parent.snapshot.params['id']);
  }

}
