import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallerecetaPage } from './detallereceta.page';

const routes: Routes = [
  {
    path: '',
    component: DetallerecetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallerecetaPageRoutingModule {}
