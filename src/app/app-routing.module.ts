import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'venue', loadChildren: () => import('./venue/venue.module').then( m => m.VenuePageModule)},
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'createuser', loadChildren: './createuser/createuser.module#CreateuserPageModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },
  { path: 'sign-up', loadChildren: './auth/sign-up/sign-up.module#SignUpPageModule' },
  {
    path: 'idea-list',
    loadChildren: () => import('./venue/idea-list/idea-list.module').then( m => m.IdeaListPageModule)
  },
  {
    path: 'idea-details/:id',
    loadChildren: () => import('./venue/idea-details/idea-details.module').then( m => m.IdeaDetailsPageModule)
  },
  {
    path: 'barcode',
    loadChildren: () => import('./barcode/barcode.module').then( m => m.BarcodePageModule)
  },
];

@NgModule({

  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    HttpClientModule
  ],
  exports: [RouterModule]
})
 export class AppRoutingModule { }