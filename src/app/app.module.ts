import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HalveitModule} from './halveit/halveit.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HalveitModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
