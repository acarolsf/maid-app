import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendadas',
  templateUrl: './agendadas.page.html',
  styleUrls: ['./agendadas.page.scss'],
})
export class AgendadasPage implements OnInit {

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

  constructor() {
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

}
