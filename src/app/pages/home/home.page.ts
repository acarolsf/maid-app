import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  slidesOpt = {
    slidesPerView: 2.5,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }
  };
  slideItems: Array<{title: string, icon: string, link: string}>;
  ranking: Array<{nome: string, rating: string, cidade: string, link: string}>;
  menuContent: string;

  constructor(private menuController: MenuController) {
    this.initializeItems();
  }

  initializeItems() {
    this.slideItems = [];
    this.slideItems.push({
      title: 'Babá',
      icon: 'logo-reddit',
      link: ''
    });
    this.slideItems.push({
      title: 'Cozinheira',
      icon: 'restaurant',
      link: ''
    });
    this.slideItems.push({
      title: 'Eletricistas',
      icon: 'flash',
      link: ''
    });

    this.ranking = [];
    this.ranking.push({
      nome: 'Ana Carolina',
      rating: '5',
      cidade: 'Caicó',
      link: ''
    });
    this.ranking.push({
      nome: 'Ana Carolina',
      rating: '5',
      cidade: 'Caicó',
      link: ''
    });
    this.ranking.push({
      nome: 'Ana Carolina',
      rating: '5',
      cidade: 'Caicó',
      link: ''
    });
    this.ranking.push({
      nome: 'Ana Carolina',
      rating: '5',
      cidade: 'Caicó',
      link: ''
    });
    this.ranking.push({
      nome: 'Ana Carolina',
      rating: '5',
      cidade: 'Caicó',
      link: ''
    });
    this.ranking.push({
      nome: 'Ana Carolina',
      rating: '5',
      cidade: 'Caicó',
      link: ''
    });
    this.ranking.push({
      nome: 'Ana Carolina',
      rating: '5',
      cidade: 'Caicó',
      link: ''
    });
    this.ranking.push({
      nome: 'Ana Carolina',
      rating: '5',
      cidade: 'Caicó',
      link: ''
    });
    this.ranking.push({
      nome: 'Ana Carolina',
      rating: '5',
      cidade: 'Caicó',
      link: ''
    });
    this.ranking.push({
      nome: 'Ana Carolina',
      rating: '5',
      cidade: 'Caicó',
      link: ''
    });
  }

  ngOnInit() {
    // this.menuController.enable(true, 'empregada-menu');
    this.menuController.enable(true);
    this.menuController.open('empregadorMenu');
  }

  onSearchChange(event) {
  }
}
