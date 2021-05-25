import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmbroideryPage } from './embroidery.page';

const routes: Routes = [
  {
    path: '',
    component: EmbroideryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmbroideryPageRoutingModule {}
