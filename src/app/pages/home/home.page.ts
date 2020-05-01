import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController, ModalController } from '@ionic/angular';
import { ProfileComponent } from 'src/app/components/profile/profile.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Plugins } from '@capacitor/core';

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

  logininfo: any;
  user: any;

  constructor(
    private menuController: MenuController,
    private modalController: ModalController,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      if (params && params.userinfo) {
        this.logininfo = JSON.parse(params.userinfo);
      }
    });
    this.initializeItems();
  }

  ionViewWillEnter() {
    this.getUserInfo();
  }

  async signOut(): Promise<void> {
    await Plugins.FacebookLogin.logout();
    this.router.navigate(['/login']);
  }

  async getUserInfo() {
    const response =
      await fetch(
        `https://graph.facebook.com/${this.logininfo.userId}?fields=id,name,gender,link,picture&type=large&access_token=${this.logininfo.token}`
      );
    const myJson = await response.json();
    this.user = myJson;
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
    // this.menuController.open('empregadorMenu');
  }

  async openModal(ppl, event) {
    const modal = await this.modalController.create({
      component: ProfileComponent,
      cssClass: 'modal-page',
      componentProps: {
        key: ppl.key,
        nome: ppl.nome,
        cidade: ppl.cidade,
        email: 'acarolsf@gmail.com',
        telefone: '999999999'
      },
    });
    return await modal.present();
  }
  onSearchChange(event) {
  }
}
