import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewCampPage } from './new-camp.page';

const routes: Routes = [
  {
    path: '',
    component: NewCampPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewCampPageRoutingModule {}
