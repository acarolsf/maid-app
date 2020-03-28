import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AceitasPageRoutingModule } from './aceitas-routing.module';

import { AceitasPage } from './aceitas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AceitasPageRoutingModule
  ],
  declarations: [AceitasPage]
})
export class AceitasPageModule {}
