import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CampDetailPageRoutingModule } from './camp-detail-routing.module';

import { ComponentsModule } from '../components/components.module';

import { CampDetailPage } from './camp-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CampDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes),
    CampDetailPageRoutingModule
  ],
  declarations: [CampDetailPage]
})
export class CampDetailPageModule {}
