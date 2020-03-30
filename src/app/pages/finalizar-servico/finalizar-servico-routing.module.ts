import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinalizarServicoPage } from './finalizar-servico.page';

const routes: Routes = [
  {
    path: '',
    component: FinalizarServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinalizarServicoPageRoutingModule {}
