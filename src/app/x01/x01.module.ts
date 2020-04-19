import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { X01Component } from './x01/x01.component';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [X01Component],
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule
    ]
})
export class X01Module { }
