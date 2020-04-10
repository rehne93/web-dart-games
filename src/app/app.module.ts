import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HalveitModule} from './halveit/halveit.module';
import {AppRoutingModule} from './app-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MulliganModule} from './mulligan/mulligan.module';
import { NavigationComponent } from './navigation/navigation.component';
import { X01Module } from './x01/x01.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    HalveitModule,
    AppRoutingModule,
    MatSidenavModule,
    MulliganModule,
    X01Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
