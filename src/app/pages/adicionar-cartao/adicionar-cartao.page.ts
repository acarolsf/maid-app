import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-adicionar-cartao',
  templateUrl: './adicionar-cartao.page.html',
  styleUrls: ['./adicionar-cartao.page.scss'],
})
export class AdicionarCartaoPage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Cartão adicionado!',
      duration: 2000
    });
    toast.present();
  }

  adicionar() {
    this.presentToast();
  }
}
