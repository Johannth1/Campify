import { NgModule } from "@angular/core";
import { IonicModule } from '@ionic/angular';
import { cardItemComponent } from './card-item/card-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [IonicModule, CommonModule],
    declarations: [cardItemComponent],
    exports: [cardItemComponent]
})
export class ComponentsModule {}