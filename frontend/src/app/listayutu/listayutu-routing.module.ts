import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListayutuPage } from './listayutu.page';

const routes: Routes = [
  {
    path: '',
    component: ListayutuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListayutuPageRoutingModule {}
