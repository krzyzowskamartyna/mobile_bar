import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ListElementComponent } from './list-element/list-element.component';
import { ListElementDetailsComponent } from './list-element/list-element-details/list-element-details.component';
import { RouterModule } from '@angular/router';

const decs = [
    ListElementComponent,
    ListElementDetailsComponent,
];

@NgModule({
    declarations: decs,
    imports: [
        CommonModule,
        IonicModule,
        RouterModule,
    ],
    exports: decs,
})
export class ComponentsModule {
}
