import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmAbertoPage } from './em-aberto.page';

const routes: Routes = [
  {
    path: '',
    component: EmAbertoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmAbertoPageRoutingModule {}
