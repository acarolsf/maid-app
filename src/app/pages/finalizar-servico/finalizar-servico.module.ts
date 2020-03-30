import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinalizarServicoPageRoutingModule } from './finalizar-servico-routing.module';

import { FinalizarServicoPage } from './finalizar-servico.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    FinalizarServicoPageRoutingModule
  ],
  declarations: [FinalizarServicoPage]
})
export class FinalizarServicoPageModule {}
