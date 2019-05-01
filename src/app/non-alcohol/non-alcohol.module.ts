import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NonAlcoholPage } from './non-alcohol.page';
import { ComponentsModule } from '../elements/components.module';

const routes: Routes = [
  {
    path: '',
    component: NonAlcoholPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NonAlcoholPage]
})
export class NonAlcoholPageModule { }
