import { Component, OnInit } from '@angular/core';
import { DesbloquearComponent } from 'src/app/components/desbloquear/desbloquear.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contas-bloqueadas',
  templateUrl: './contas-bloqueadas.page.html',
  styleUrls: ['./contas-bloqueadas.page.scss'],
})
export class ContasBloqueadasPage implements OnInit {

  people: Array<{nome: string, funcao: string, cidade: string, link: string}>;

  constructor(private modalController: ModalController) {

    this.people = [];
    this.people.push({
      nome: 'Ana Carolina',
      funcao: 'Babá',
      cidade: 'Caicó',
      link: ''
    });
    this.people.push({
      nome: 'Malika',
      funcao: 'Babá',
      cidade: 'Caicó',
      link: ''
    });
    this.people.push({
      nome: 'Duny',
      funcao: 'Babá',
      cidade: 'Caicó',
      link: ''
    });
    this.people.push({
      nome: 'Stacy',
      funcao: 'Babá',
      cidade: 'Caicó',
      link: ''
    });
    this.people.push({
      nome: 'Kylie',
      funcao: 'Babá',
      cidade: 'Caicó',
      link: ''
    });
    this.people.push({
      nome: 'Jenna',
      funcao: 'Babá',
      cidade: 'Caicó',
      link: ''
    });
    this.people.push({
      nome: 'Josh',
      funcao: 'Babá',
      cidade: 'Caicó',
      link: ''
    });
    this.people.push({
      nome: 'Ana Carolina',
      funcao: 'Babá',
      cidade: 'Caicó',
      link: ''
    });
    this.people.push({
      nome: 'Ana Carolina',
      funcao: 'Babá',
      cidade: 'Caicó',
      link: ''
    });
    this.people.push({
      nome: 'Ana Carolina',
      funcao: 'Babá',
      cidade: 'Caicó',
      link: ''
    });
   }

  ngOnInit() {
  }

  async openModal(ppl, event) {
    const modal = await this.modalController.create({
      component: DesbloquearComponent,
      cssClass: 'modal-page',
      componentProps: {
        key: ppl.key,
        nome: ppl.nome,
      },
    });
    return await modal.present();
  }

}
