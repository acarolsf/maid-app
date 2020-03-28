import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitarServicoPage } from './solicitar-servico.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitarServicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitarServicoPageRoutingModule {}
