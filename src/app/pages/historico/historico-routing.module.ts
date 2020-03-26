import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoPage } from './historico.page';

const routes: Routes = [
  {
    path: 'historico',
    component: HistoricoPage,
    children: [
      {
        path: 'anteriores',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../anteriores/anteriores.module').then(m => m.AnterioresPageModule)
          }
        ]
      },
      {
        path: 'agendadas',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../agendadas/agendadas.module').then(m => m.AgendadasPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/historico/anteriores',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/historico/anteriores',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoPageRoutingModule {}
