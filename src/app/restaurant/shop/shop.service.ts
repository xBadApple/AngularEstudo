import { Shop } from "app/restaurant/shop/shop.model";
import { MEAT_API } from "app/app.api";
import { Injectable} from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ErrorHandler } from "../../error-handler";


import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { HttpModule, Http } from "@angular/http";

@Injectable()
export class ShopService {
    constructor(private https: Http) {
    }


    shops(): Observable<Shop[]> {
        return this.https.get(`${MEAT_API}/restaurants`).map(response => response.json()).catch(ErrorHandler.handleError);
    }

    shopById(id: string): Observable<Shop> {
        return this.https.get(`${MEAT_API}/restaurants/${id}`).map(response => response.json()).catch(ErrorHandler.handleError);
    }

    reviewOfRestaurant(id: string): Observable<any> {
        return this.https.get(`${MEAT_API}/restaurants/${id}/reviews`).map(response => response.json()).catch(ErrorHandler.handleError);
    }

    menuOfRestaurant(id: string): Observable<any> {
        return this.https.get(`${MEAT_API}/restaurants/${id}/menu`).map(response => response.json()).catch(ErrorHandler.handleError);
    }

}