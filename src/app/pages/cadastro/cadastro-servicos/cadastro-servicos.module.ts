import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroServicosPageRoutingModule } from './cadastro-servicos-routing.module';

import { CadastroServicosPage } from './cadastro-servicos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroServicosPageRoutingModule
  ],
  declarations: [CadastroServicosPage]
})
export class CadastroServicosPageModule {}
