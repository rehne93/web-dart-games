import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MulliganComponent } from './mulligan/mulligan.component';
import { NumberFieldComponent } from './number-field/number-field.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  declarations: [MulliganComponent, NumberFieldComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FontAwesomeModule,
    MatTooltipModule
  ],
  exports:[
    MulliganComponent,
    NumberFieldComponent
  ]
})
export class MulliganModule { }
