import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendentesPage } from './pendentes.page';

const routes: Routes = [
  {
    path: '',
    component: PendentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendentesPageRoutingModule {}
