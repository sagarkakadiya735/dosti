import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmbroiderylistPageRoutingModule } from './embroiderylist-routing.module';

import { EmbroiderylistPage } from './embroiderylist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmbroiderylistPageRoutingModule
  ],
  declarations: [EmbroiderylistPage]
})
export class EmbroiderylistPageModule {}
