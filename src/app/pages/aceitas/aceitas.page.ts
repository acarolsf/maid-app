import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-aceitas',
  templateUrl: './aceitas.page.html',
  styleUrls: ['./aceitas.page.scss'],
})
export class AceitasPage implements OnInit {

  items: Array<{
    data: string,
    rating: string,
    empregado: string,
    empregador: string,
    formaDePagamento: string,
    quantia: string,
    local: string,
    horario: string,
    status: string,
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
      horario: '14h',
      status: 'não finalizado'
    });
    this.items.push({
      data: '20/02/2020',
      rating: '5',
      empregado: 'Malika Lee',
      empregador: 'Abby West',
      formaDePagamento: 'Crédito',
      quantia: '100,00',
      local: 'Martin Luter King Jr S W',
      horario: '14h',
      status: 'não finalizado'
    });
    this.items.push({
      data: '20/02/2020',
      rating: '5',
      empregado: 'Malika Lee',
      empregador: 'Abby West',
      formaDePagamento: 'Débito',
      quantia: '100,00',
      local: 'Martin Luter King Jr S W',
      horario: '14h',
      status: 'não finalizado'
    });
    this.items.push({
      data: '20/02/2020',
      rating: '5',
      empregado: 'Malika Lee',
      empregador: 'Abby West',
      formaDePagamento: 'Paypal',
      quantia: '100,00',
      local: 'Martin Luter King Jr S W',
      horario: '14h',
      status: 'não finalizado'
    });
    this.items.push({
      data: '20/02/2020',
      rating: '5',
      empregado: 'Malika Lee',
      empregador: 'Abby West',
      formaDePagamento: 'PicPay',
      quantia: '100,00',
      local: 'Martin Luter King Jr S W',
      horario: '14h',
      status: 'não finalizado'
    });
    this.items.push({
      data: '20/02/2020',
      rating: '5',
      empregado: 'Malika Lee',
      empregador: 'Abby West',
      formaDePagamento: 'Dinheiro',
      quantia: '100,00',
      local: 'Martin Luter King Jr S W',
      horario: '14h',
      status: 'não finalizado'
    });
  }


  ngOnInit() {
  }

  openDetail(item, id) {
    this.dataService.setData(id, item);
    this.router.navigateByUrl('/servico-detail/' + id);
  }

  finalizar(item, id) {
    const key = this.randomKey();
    this.dataService.setData(id, item);
    this.router.navigateByUrl('/finalizar-servico/' + id);
  }

  randomKey() {
    const r = Math.random().toString(36).substring(7);
    return r;
  }

}
