import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HalveitComponent } from './halveit/halveit.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {AppModule} from '../app.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
    declarations: [HalveitComponent],
    exports: [
        HalveitComponent
    ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatTooltipModule
  ],
})
export class HalveitModule { }
