import { Shop } from "app/restaurant/shop/shop.model";
import { MEAT_API } from "app/app.api";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";


import "rxjs/add/operator/map";
import { HttpModule, Http } from "@angular/http";

@Injectable()
export class ShopService {
    constructor(private https: Http) {
    }


}