import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CoctailsPage } from './coctails.page';
import { ComponentsModule } from '../elements/components.module';

const routes: Routes = [
  {
    path: '',
    component: CoctailsPage
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
  declarations: [CoctailsPage],
  //exports: [CoctailsPage]
})
export class CoctailsPageModule { }
