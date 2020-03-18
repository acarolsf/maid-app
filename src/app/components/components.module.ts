import { NgModule } from '@angular/core';
import { RatingComponent } from './rating/rating.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [RatingComponent],
    exports: [RatingComponent]
})
export class ComponentsModule {}
