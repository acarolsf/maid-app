import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroFormaTrabalhoPageRoutingModule } from './cadastro-forma-trabalho-routing.module';

import { CadastroFormaTrabalhoPage } from './cadastro-forma-trabalho.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CadastroFormaTrabalhoPageRoutingModule
  ],
  declarations: [CadastroFormaTrabalhoPage]
})
export class CadastroFormaTrabalhoPageModule {}
