import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IngredientsPageModule } from './ingredients/ingredients.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './elements/components.module';

import { IonicStorageModule } from '@ionic/storage';
import { CacheModule } from "ionic-cache";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    MatGridListModule,
    ComponentsModule,
    IonicStorageModule.forRoot(),
    CacheModule.forRoot({ keyPrefix: 'appCache' }),
    HttpClientModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, IngredientsPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
