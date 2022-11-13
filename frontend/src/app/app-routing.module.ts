import { NgModule } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

//Añadimos este código
  const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
  const redirectLoggedInToHome = () => redirectLoggedInTo(['index']);

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'update-student/:id',
    loadChildren: () => import('./update-student/update-student.module').then( m => m.UpdateStudentPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule),
    //...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'verecetas',
    loadChildren: () => import('./verecetas/verecetas.module').then( m => m.VerecetasPageModule),
    //...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'detallereceta/:id',
    loadChildren: () => import('./detallereceta/detallereceta.module').then( m => m.DetallerecetaPageModule)
  },
  {
    path: 'listayutu',
    loadChildren: () => import('./listayutu/listayutu.module').then( m => m.ListayutuPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
