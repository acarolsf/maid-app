import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContasBloqueadasPage } from './contas-bloqueadas.page';

const routes: Routes = [
  {
    path: '',
    component: ContasBloqueadasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContasBloqueadasPageRoutingModule {}
