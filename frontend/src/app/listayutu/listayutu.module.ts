import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListayutuPageRoutingModule } from './listayutu-routing.module';

import { ListayutuPage } from './listayutu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListayutuPageRoutingModule
  ],
  declarations: [ListayutuPage]
})
export class ListayutuPageModule {}
