import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public maidPages = [
    {
      title: 'Página Inicial',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Perfil',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Histórico',
      url: '/historico',
      icon: 'list'
    }
  ];
  public employerPages = [
    {
      title: 'Página Inicial',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Perfil',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Histórico',
      url: '/historico',
      icon: 'list'
    },
    {
      title: 'Solicitações',
      url: '/solicitacoes',
      icon: 'list'
    },
    {
      title: 'Forma de Pagamento',
      url: '/forma-pagamento',
      icon: 'card'
    },
    {
      title: 'Configurações',
      url: '/configuracoes',
      icon: 'settings'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('pages/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.maidPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
