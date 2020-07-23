import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';



import {ROUTES} from './app.routes'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ShopComponent } from './restaurant/shop/shop.component';
import { ShopService } from 'app/restaurant/shop/shop.service';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { ShoppingCartComponent } from './restaurant-details/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-details/menu-item/menu-item.component';
import { MenuComponent } from './restaurant-details/menu/menu.component';
import { ReviewsComponent } from './restaurant-details/reviews/reviews.component';
import { CartService } from 'app/restaurant-details/shopping-cart/shopping-cart.service';
import { OrderService } from 'app/order/order.service.model';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotificationService } from 'app/shared/messages/notification.service';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantComponent,
    ShopComponent,
    RestaurantDetailsComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    MenuComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    SharedModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ShopService, CartService,NotificationService, OrderService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
