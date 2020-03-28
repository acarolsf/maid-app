import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-editar-dados',
  templateUrl: './editar-dados.page.html',
  styleUrls: ['./editar-dados.page.scss'],
})
export class EditarDadosPage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Dados salvos com sucesso!',
      duration: 2000
    });
    toast.present();
  }

  salvarDados() {
    this.presentToast();
  }

}
