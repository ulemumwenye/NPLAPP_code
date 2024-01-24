import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EpaperPage } from './epaper.page';

const routes: Routes = [
  {
    path: '',
    component: EpaperPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpaperPageRoutingModule {}
