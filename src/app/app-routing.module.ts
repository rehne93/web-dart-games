import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HalveitComponent} from './halveit/halveit/halveit.component';
import {MulliganComponent} from './mulligan/mulligan/mulligan.component';

const routes: Routes = [
  {path: '', redirectTo: 'halveit', pathMatch: 'full'},
  {
    path: 'halveit',
    component: HalveitComponent
  },
  {
    path: 'mulligan',
    component: MulliganComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
