import {Routes} from '@angular/router'
import { HomeComponent } from 'app/home/home.component'
import { AboutComponent } from 'app/about/about.component'
import { RestaurantComponent } from 'app/restaurant/restaurant.component'
import { RestaurantDetailsComponent } from 'app/restaurant-details/restaurant-details.component'
import { MenuComponent } from 'app/restaurant-details/menu/menu.component'
import { ReviewsComponent } from 'app/restaurant-details/reviews/reviews.component'
import { OrderComponent } from 'app/order/order.component'
import { OrderSummaryComponent } from 'app/order-summary/order-summary.component'

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantComponent },
    {
        path: 'restaurants/:id', component: RestaurantDetailsComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full'},
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent}
        ]
    },
    { path: 'about', component: AboutComponent },
    { path: 'order', component: OrderComponent },
    { path: 'order-summary', component: OrderSummaryComponent}
]

