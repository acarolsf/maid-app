import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-solicitar-servico-servicos',
  templateUrl: './solicitar-servico-servicos.page.html',
  styleUrls: ['./solicitar-servico-servicos.page.scss'],
})
export class SolicitarServicoServicosPage implements OnInit {

  public form = [
    { val: 'Cuidar de Criança', isChecked: true },
    { val: 'Cuidar da Casa', isChecked: false },
    { val: 'Lavar banheiro', isChecked: false },
    { val: 'Cozinhar', isChecked: false }
  ];

  constructor(private toastController: ToastController) { }

  ngOnInit() {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Sua solicitação foi enviada!',
      duration: 2000
    });
    toast.present();
  }


  solicitar() {
    this.presentToast();
  }
}
