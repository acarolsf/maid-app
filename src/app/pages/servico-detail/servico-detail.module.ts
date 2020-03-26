import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicoDetailPageRoutingModule } from './servico-detail-routing.module';

import { ServicoDetailPage } from './servico-detail.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ServicoDetailPageRoutingModule
  ],
  declarations: [ServicoDetailPage]
})
export class ServicoDetailPageModule {}
