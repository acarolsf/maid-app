import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitacoesPage } from './solicitacoes.page';

const routes: Routes = [
  {
    path: 'solicitacoes',
    component: SolicitacoesPage,
    children: [
      {
        path: 'em-aberto',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../em-aberto/em-aberto.module').then(m => m.EmAbertoPageModule)
          }
        ]
      },
      {
        path: 'aceitas',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../aceitas/aceitas.module').then(m => m.AceitasPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/solicitacoes/em-aberto',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/solicitacoes/em-aberto',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitacoesPageRoutingModule {}
