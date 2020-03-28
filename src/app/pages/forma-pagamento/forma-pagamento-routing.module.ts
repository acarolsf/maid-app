import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormaPagamentoPage } from './forma-pagamento.page';

const routes: Routes = [
  {
    path: '',
    component: FormaPagamentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormaPagamentoPageRoutingModule {}
