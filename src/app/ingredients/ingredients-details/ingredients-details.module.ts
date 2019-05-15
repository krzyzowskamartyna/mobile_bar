import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IngredientsDetailsPage } from './ingredients-details.page';
import { ComponentsModule } from 'src/app/elements/components.module';

const routes: Routes = [
  {
    path: '',
    component: IngredientsDetailsPage
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
  declarations: [IngredientsDetailsPage]
})
export class IngredientsDetailsPageModule { }
