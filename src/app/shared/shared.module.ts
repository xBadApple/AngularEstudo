import { NgModule } from "@angular/core";
import { InputComponent } from "app/shared/input/input.component";
import { RadioComponent } from "app/shared/radio/radio.component";
import { RatingComponent } from "app/shared/rating/rating.component";

import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SnackbarComponent } from './messages/snackbar/snackbar.component';


@NgModule({
    declarations: [
        InputComponent,
        RadioComponent,
        RatingComponent,
        SnackbarComponent
    ],

    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        InputComponent, RadioComponent, RatingComponent, SnackbarComponent,
        CommonModule, FormsModule, ReactiveFormsModule
    ]
})

export class SharedModule{}
