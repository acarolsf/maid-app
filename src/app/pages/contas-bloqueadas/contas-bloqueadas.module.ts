import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContasBloqueadasPageRoutingModule } from './contas-bloqueadas-routing.module';

import { ContasBloqueadasPage } from './contas-bloqueadas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContasBloqueadasPageRoutingModule
  ],
  declarations: [ContasBloqueadasPage]
})
export class ContasBloqueadasPageModule {}
