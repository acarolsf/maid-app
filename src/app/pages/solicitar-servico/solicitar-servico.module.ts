import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarServicoPageRoutingModule } from './solicitar-servico-routing.module';

import { SolicitarServicoPage } from './solicitar-servico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitarServicoPageRoutingModule
  ],
  declarations: [SolicitarServicoPage]
})
export class SolicitarServicoPageModule {}
