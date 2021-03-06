import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CoctailsDetailsPage } from './coctails-details.page';
import { ComponentsModule } from 'src/app/elements/components.module';

const routes: Routes = [
  {
    path: '',
    component: CoctailsDetailsPage
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
  declarations: [CoctailsDetailsPage]
})
export class CoctailsDetailsPageModule { }
