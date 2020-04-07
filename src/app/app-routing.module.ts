import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HalveitComponent} from './halveit/halveit/halveit.component';
import {MulliganComponent} from './mulligan/mulligan/mulligan.component';
import {X01Component} from './x01/x01/x01.component';

const routes: Routes = [
  {path: '', redirectTo: 'halveit', pathMatch: 'full'},
  {
    path: 'halveit',
    component: HalveitComponent
  },
  {
    path: 'mulligan',
    component: MulliganComponent
  },
  {
    path: 'x01',
    component: X01Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
