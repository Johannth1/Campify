import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { NewCampPageRoutingModule } from './new-camp-routing.module';

import { NewCampPage } from './new-camp.page';

const routes: Routes = [
  {
    path: '',
    component: NewCampPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NewCampPageRoutingModule
  ],
  declarations: [NewCampPage]
})
export class NewCampPageModule {}
