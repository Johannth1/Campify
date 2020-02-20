import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { 
  canActivate, 
  redirectLoggedInTo, 
  redirectUnauthorizedTo 
} from "@angular/fire/auth-guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // Denne passer på at hvis man ikke er logget inn, så blir man sendt tilbake til login skjermen,
  // for å passe på at du faktisk må ha en bruker for å ta i bruk applikasjonen.
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    ...canActivate(redirectUnauthorizedTo(['login']))
  },
  // Her passer man på at man blir sendt til home, hvis man faktisk har logget inn.
  { 
    path: 'login', 
    loadChildren: './login/login.module#LoginPageModule',
    ...canActivate(redirectLoggedInTo(['home']))
  },
  { path: 'new-camp', loadChildren: './new-camp/new-camp.module#NewCampPageModule' },
  {
    path: 'camp-detail',
    loadChildren: () => import('./camp-detail/camp-detail.module').then( m => m.CampDetailPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
