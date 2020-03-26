import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  },  {
    path: 'servico-detail',
    loadChildren: () => import('./pages/servico-detail/servico-detail.module').then( m => m.ServicoDetailPageModule)
  },

  // {
  //   path: 'agendadas',
  //   loadChildren: () => import('./pages/agendadas/agendadas.module').then( m => m.AgendadasPageModule)
  // },
  // {
  //   path: 'anteriores',
  //   loadChildren: () => import('./pages/anteriores/anteriores.module').then( m => m.AnterioresPageModule)
  // }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
