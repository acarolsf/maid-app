import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolicitarServicoServicosPageRoutingModule } from './solicitar-servico-servicos-routing.module';

import { SolicitarServicoServicosPage } from './solicitar-servico-servicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolicitarServicoServicosPageRoutingModule
  ],
  declarations: [SolicitarServicoServicosPage]
})
export class SolicitarServicoServicosPageModule {}
