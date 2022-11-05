import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerecetasPageRoutingModule } from './verecetas-routing.module';

import { VerecetasPage } from './verecetas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerecetasPageRoutingModule
  ],
  declarations: [VerecetasPage]
})
export class VerecetasPageModule {}
