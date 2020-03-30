import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendentesPageRoutingModule } from './pendentes-routing.module';

import { PendentesPage } from './pendentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendentesPageRoutingModule
  ],
  declarations: [PendentesPage]
})
export class PendentesPageModule {}
