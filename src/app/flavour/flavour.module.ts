import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FlavourPage } from './flavour.page';
import { ComponentsModule } from '../elements/components.module';

const routes: Routes = [
  {
    path: '',
    component: FlavourPage
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
  declarations: [FlavourPage]
})
export class FlavourPageModule { }
