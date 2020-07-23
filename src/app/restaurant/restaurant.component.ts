import { Component, OnInit, Input } from '@angular/core';
import { Shop } from 'app/restaurant/shop/shop.model';
import { ShopService } from 'app/restaurant/shop/shop.service';
import { transition, trigger, state, style, animate } from '@angular/animations';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import 'rxjs/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'



@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  animations: [
    trigger('toggle-search', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})
export class RestaurantComponent implements OnInit {

  searchBarState = 'hidden';
  shops: Shop[];

  formGroup: FormGroup;
  formControl: FormControl;

  constructor(private shopService: ShopService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formControl = this.formBuilder.control('');
    this.formGroup = this.formBuilder.group({
      searchControl: this.formControl
    })

    this.formControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(searchItem => this.shopService.shops(searchItem))
      .subscribe(shops => this.shops = shops);

    this.shopService.shops().subscribe(shops => this.shops = shops);
  }

  toggleSearch() {
    this.searchBarState = (this.searchBarState === 'hidden') ? 'visible' : 'hidden';
  }

}
