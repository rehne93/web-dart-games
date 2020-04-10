import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {HalveitModule} from './halveit/halveit.module';
import {AppRoutingModule} from './app-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MulliganModule} from './mulligan/mulligan.module';
import { NavigationComponent } from './navigation/navigation.component';
import { X01Module } from './x01/x01.module';
import {MatButtonModule} from '@angular/material/button';
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
    X01Module,
    BrowserAnimationsModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
