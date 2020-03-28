import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitarServicoServicosPage } from './solicitar-servico-servicos.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitarServicoServicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitarServicoServicosPageRoutingModule {}
