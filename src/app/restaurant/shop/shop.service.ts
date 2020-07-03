import { Shop } from "app/restaurant/shop/shop.model";
import { Http } from "@angular/http";
import { MEAT_API } from "app/app.api";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/map";


export class ShopService {
    constructor(private https: Http) {
    }

    shops(): Observable<Shop[]> {
        return this.https.get(MEAT_API+"/restaurants").map(response => response.json());
    }
}