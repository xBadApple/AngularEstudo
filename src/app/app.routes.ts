import {Routes} from '@angular/router'
import { HomeComponent } from 'app/home/home.component'
import { AboutComponent } from 'app/about/about.component'
import { RestaurantComponent } from 'app/restaurant/restaurant.component'

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'restaurants', component: RestaurantComponent}
]

