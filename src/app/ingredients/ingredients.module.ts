import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { MatGridListModule } from '@angular/material/grid-list';

import { IngredientsPage } from './ingredients.page';

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
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IngredientsPage],
  exports: [IngredientsPage]
})
export class IngredientsPageModule { }
