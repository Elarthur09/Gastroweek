import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerecetasPage } from './verecetas.page';

const routes: Routes = [
  {
    path: '',
    component: VerecetasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerecetasPageRoutingModule {}
