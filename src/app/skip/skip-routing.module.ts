import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkipPage } from './skip.page';

const routes: Routes = [
  {
    path: '',
    component: SkipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkipPageRoutingModule {}
