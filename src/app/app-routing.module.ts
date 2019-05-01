import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'main', loadChildren: './main/main.module#MainPageModule' },
  { path: 'ingredients', loadChildren: './ingredients/ingredients.module#IngredientsPageModule' },
  { path: 'coctails', loadChildren: './coctails/coctails.module#CoctailsPageModule' },
  { path: 'coctails-details', loadChildren: './coctails/coctails-details/coctails-details.module#CoctailsDetailsPageModule' },
  { path: 'coctails/:id', loadChildren: './coctails/coctails-details/coctails-details.module#CoctailsDetailsPageModule' },
  { path: 'non-alcohol', loadChildren: './non-alcohol/non-alcohol.module#NonAlcoholPageModule' },
  { path: 'non-alcohol-details/:id', loadChildren: './non-alcohol/non-alcohol-details/non-alcohol-details.module#NonAlcoholDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
