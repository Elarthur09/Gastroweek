import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallerecetaPageRoutingModule } from './detallereceta-routing.module';

import { DetallerecetaPage } from './detallereceta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallerecetaPageRoutingModule
  ],
  declarations: [DetallerecetaPage]
})
export class DetallerecetaPageModule {}
