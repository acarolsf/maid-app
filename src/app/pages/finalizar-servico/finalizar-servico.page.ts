import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-finalizar-servico',
  templateUrl: './finalizar-servico.page.html',
  styleUrls: ['./finalizar-servico.page.scss'],
})
export class FinalizarServicoPage implements OnInit {

  data: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.data = [];
    if (this.route.snapshot.data.special) {
      this.data = this.route.snapshot.data.special;
    }

    console.log(this.data);
  }

  async toastFinalizado() {
    const toast = await this.toastController.create({
      message: 'Serviço Finalizado!',
      duration: 2000
    });
    toast.present();
  }

  finalizar() {
    this.toastFinalizado();
  }
}
