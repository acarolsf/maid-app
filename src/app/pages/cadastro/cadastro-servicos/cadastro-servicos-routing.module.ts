import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroServicosPage } from './cadastro-servicos.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroServicosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroServicosPageRoutingModule {}
