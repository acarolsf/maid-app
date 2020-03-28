import { NgModule } from '@angular/core';
import { RatingComponent } from './rating/rating.component';
import { CommonModule } from '@angular/common';
import { MapaComponent } from './mapa/mapa.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
    ],
    declarations: [
        RatingComponent,
        MapaComponent,
    ],
    exports: [
        RatingComponent,
        MapaComponent
    ]
})
export class ComponentsModule {}
