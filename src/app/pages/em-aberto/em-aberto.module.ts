import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmAbertoPageRoutingModule } from './em-aberto-routing.module';

import { EmAbertoPage } from './em-aberto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmAbertoPageRoutingModule
  ],
  declarations: [EmAbertoPage]
})
export class EmAbertoPageModule {}
