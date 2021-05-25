import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkipPageRoutingModule } from './skip-routing.module';

import { SkipPage } from './skip.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkipPageRoutingModule
  ],
  declarations: [SkipPage]
})
export class SkipPageModule { }
