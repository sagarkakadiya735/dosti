import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmbroideryPageRoutingModule } from './embroidery-routing.module';

import { EmbroideryPage } from './embroidery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmbroideryPageRoutingModule
  ],
  declarations: [EmbroideryPage]
})
export class EmbroideryPageModule {}
