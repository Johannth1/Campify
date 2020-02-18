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
  { 
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule),
    ...canActivate(redirectUnauthorizedTo(['login']))
  },
  /*{ 
    path: 'detail-view', 
    loadChildren: './detail-view/detail-view.module#DetailViewPageModule' 
  },*/
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
