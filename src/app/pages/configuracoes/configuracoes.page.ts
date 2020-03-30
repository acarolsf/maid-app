import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NotificacoesComponent } from 'src/app/components/notificacoes/notificacoes.component';
import { ExibicaoComponent } from 'src/app/components/exibicao/exibicao.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.page.html',
  styleUrls: ['./configuracoes.page.scss'],
})
export class ConfiguracoesPage implements OnInit {

  public form = [
    { title: 'Privacidade', val: '', link: 'privacy' },
    { title: 'Notificações', val: 'Ativado', link: 'notifications' },
    { title: 'Modo de Exibição', val: 'Claro', link: 'exibition' }
  ];

  constructor(private modalController: ModalController, private router: Router) { }

  ngOnInit() {
  }

  async notificacoes(event) {
    const modal = await this.modalController.create({
      component: NotificacoesComponent,
      cssClass: 'modal-page',
      showBackdrop: true,
      backdropDismiss: true,
    });
    return await modal.present();
  }

  async exibicao(event) {
    const modal = await this.modalController.create({
      component: ExibicaoComponent,
      cssClass: 'modal-page',
      showBackdrop: true,
      backdropDismiss: true,
    });
    return await modal.present();
  }

  open(opt, ev) {
    switch (opt.link) {
      case 'privacy':
        this.router.navigateByUrl('/privacidade');
        console.log('privacidade');
        break;
      case 'notifications':
        this.notificacoes(ev);
        console.log('notificações');
        break;
      case 'exibition':
        this.exibicao(ev);
        console.log('exibicao');
        break;
      default:
        break;
    }
  }

}
