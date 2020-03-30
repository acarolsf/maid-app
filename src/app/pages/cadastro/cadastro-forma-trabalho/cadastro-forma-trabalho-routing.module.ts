import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroFormaTrabalhoPage } from './cadastro-forma-trabalho.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroFormaTrabalhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroFormaTrabalhoPageRoutingModule {}
