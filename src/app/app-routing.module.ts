import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/historico/historico.module').then( m => m.HistoricoPageModule)
  },
  {
    path: 'servico-detail',
    loadChildren: () => import('./pages/servico-detail/servico-detail.module').then( m => m.ServicoDetailPageModule)
  },
  {
    path: 'servico-detail/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: () => import('./pages/servico-detail/servico-detail.module').then( m => m.ServicoDetailPageModule)
  },
  {
    path: 'editar-dados',
    loadChildren: () => import('./pages/editar-dados/editar-dados.module').then( m => m.EditarDadosPageModule)
  },
  {
    path: 'solicitar-servico',
    loadChildren: () => import('./pages/solicitar-servico/solicitar-servico.module').then( m => m.SolicitarServicoPageModule)
  },
  {
    path: 'solicitar-servico-servicos',
    loadChildren: () =>
      import('./pages/solicitar-servico-servicos/solicitar-servico-servicos.module')
        .then( m => m.SolicitarServicoServicosPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/solicitacoes/solicitacoes.module').then( m => m.SolicitacoesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
