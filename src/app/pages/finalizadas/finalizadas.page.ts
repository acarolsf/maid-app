import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-finalizadas',
  templateUrl: './finalizadas.page.html',
  styleUrls: ['./finalizadas.page.scss'],
})
export class FinalizadasPage implements OnInit {

  items: Array<{
    data: string,
    rating: string,
    empregado: string,
    empregador: string,
    formaDePagamento: string,
    quantia: string,
    local: string,
    horario: string,
    status: string
  }>;

  constructor(private router: Router, private dataService: DataService) {
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
      status: 'finalizado'
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
      status: 'finalizado'
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
      status: 'finalizado'
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
      status: 'finalizado'
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
      status: 'finalizado'
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
      status: 'finalizado'
    });
  }


  ngOnInit() {
  }

  openDetail(item, id) {
    this.dataService.setData(id, item);
    this.router.navigateByUrl('/servico-detail/' + id);
  }

}
