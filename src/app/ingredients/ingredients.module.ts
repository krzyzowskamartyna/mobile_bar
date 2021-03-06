import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { MatGridListModule } from '@angular/material/grid-list';

import { IngredientsPage } from './ingredients.page';
import { ComponentsModule } from '../elements/components.module';

const routes: Routes = [
  {
    path: '',
    component: IngredientsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatGridListModule,
    ComponentsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IngredientsPage],
  exports: [IngredientsPage]
})
export class IngredientsPageModule { }
