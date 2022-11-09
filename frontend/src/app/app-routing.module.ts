import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'update-student/:id',
    loadChildren: () => import('./update-student/update-student.module').then( m => m.UpdateStudentPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'verecetas',
    loadChildren: () => import('./verecetas/verecetas.module').then( m => m.VerecetasPageModule)
  },
  {
    path: 'detallereceta/:id',
    loadChildren: () => import('./detallereceta/detallereceta.module').then( m => m.DetallerecetaPageModule)
  },
  {
    path: 'listayutu',
    loadChildren: () => import('./listayutu/listayutu.module').then( m => m.ListayutuPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
