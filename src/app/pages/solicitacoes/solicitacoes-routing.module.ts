import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitacoesPage } from './solicitacoes.page';

const routes: Routes = [
  {
    path: 'solicitacoes',
    component: SolicitacoesPage,
    children: [
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
        path: 'finalizadas',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../finalizadas/finalizadas.module').then( m => m.FinalizadasPageModule)
          }
        ]
      },
      {
        path: 'pendentes',
        children: [
          {
            path: '',
            loadChildren: () =>
            import('../pendentes/pendentes.module').then( m => m.PendentesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/solicitacoes/pendentes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/solicitacoes/pendentes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitacoesPageRoutingModule {}
