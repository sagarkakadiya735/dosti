import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmbroiderylistPage } from './embroiderylist.page';

const routes: Routes = [
  {
    path: '',
    component: EmbroiderylistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmbroiderylistPageRoutingModule {}
