import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-em-aberto',
  templateUrl: './em-aberto.page.html',
  styleUrls: ['./em-aberto.page.scss'],
})
export class EmAbertoPage implements OnInit {

  items: Array<{
    data: string,
    rating: string,
    empregado: string,
    empregador: string,
    formaDePagamento: string,
    quantia: string,
    local: string,
    horario: string
  }>;

  constructor(
    private router: Router,
    private dataService: DataService,
    private toastController: ToastController
  ) {
    this.items = [];
    this.items.push({
      data: '20/02/2020',
      rating: '5',
      empregado: 'Malika Lee',
      empregador: 'Abby West',
      formaDePagamento: 'Dinheiro',
      quantia: '100,00',
      local: 'Martin Luter King Jr S W',
      horario: '14h'
    });
    this.items.push({
      data: '20/02/2020',
      rating: '5',
      empregado: 'Malika Lee',
      empregador: 'Abby West',
      formaDePagamento: 'Crédito',
      quantia: '100,00',
      local: 'Martin Luter King Jr S W',
      horario: '14h'
    });
    this.items.push({
      data: '20/02/2020',
      rating: '5',
      empregado: 'Malika Lee',
      empregador: 'Abby West',
      formaDePagamento: 'Débito',
      quantia: '100,00',
      local: 'Martin Luter King Jr S W',
      horario: '14h'
    });
    this.items.push({
      data: '20/02/2020',
      rating: '5',
      empregado: 'Malika Lee',
      empregador: 'Abby West',
      formaDePagamento: 'Paypal',
      quantia: '100,00',
      local: 'Martin Luter King Jr S W',
      horario: '14h'
    });
    this.items.push({
      data: '20/02/2020',
      rating: '5',
      empregado: 'Malika Lee',
      empregador: 'Abby West',
      formaDePagamento: 'PicPay',
      quantia: '100,00',
      local: 'Martin Luter King Jr S W',
      horario: '14h'
    });
    this.items.push({
      data: '20/02/2020',
      rating: '5',
      empregado: 'Malika Lee',
      empregador: 'Abby West',
      formaDePagamento: 'Dinheiro',
      quantia: '100,00',
      local: 'Martin Luter King Jr S W',
      horario: '14h'
    });
  }


  ngOnInit() {
  }

  openDetail(item, id) {
    this.dataService.setData(id, item);
    this.router.navigateByUrl('/servico-detail/' + id);
  }

  async toastAccept() {
    const toast = await this.toastController.create({
      message: 'Serviço aceito!',
      duration: 2000
    });
    toast.present();
  }

  async toastRecusado() {
    const toast = await this.toastController.create({
      message: 'Serviço recusado!',
      duration: 2000
    });
    toast.present();
  }
  accept() {
    this.toastAccept();
  }
  recused() {
    this.toastRecusado();
  }
}
