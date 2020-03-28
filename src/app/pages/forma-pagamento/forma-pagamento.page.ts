import { Component, OnInit } from '@angular/core';
import { PopoverController, ModalController } from '@ionic/angular';
import { AddCupomComponent } from 'src/app/components/add-cupom/add-cupom.component';

@Component({
  selector: 'app-forma-pagamento',
  templateUrl: './forma-pagamento.page.html',
  styleUrls: ['./forma-pagamento.page.scss'],
})
export class FormaPagamentoPage implements OnInit {

  public form = [
    { val: 'Dinheiro', icon: 'cash' },
    { val: 'Cartão de Crédito', icon: 'card', link: '/adicionar-cartao' },
    { val: 'Cartão de Débito', icon: 'card', link: '/adicionar-cartao' },
    { val: 'PayPal', icon: 'logo-paypal', link: '' },
    { val: 'PicPay', icon: 'logo-picpay', link: '' },
    { val: 'Outro', }
  ];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async cupom(event) {
    const modal = await this.modalController.create({
      component: AddCupomComponent,
      cssClass: 'modal'
    });
    return await modal.present();
  }

}
