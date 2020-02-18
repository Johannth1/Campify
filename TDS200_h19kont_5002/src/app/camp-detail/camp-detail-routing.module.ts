import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampDetailPage } from './camp-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CampDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CampDetailPageRoutingModule {}
