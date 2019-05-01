import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NonAlcoholDetailsPage } from './non-alcohol-details.page';
import { ComponentsModule } from 'src/app/elements/components.module';

const routes: Routes = [
  {
    path: '',
    component: NonAlcoholDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NonAlcoholDetailsPage]
})
export class NonAlcoholDetailsPageModule { }
