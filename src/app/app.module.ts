import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HalveitModule} from './halveit/halveit.module';
import {AppRoutingModule} from './app-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MulliganModule} from './mulligan/mulligan.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HalveitModule,
    AppRoutingModule,
    MatSidenavModule,
    MulliganModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
