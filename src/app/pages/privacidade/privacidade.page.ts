import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacidade',
  templateUrl: './privacidade.page.html',
  styleUrls: ['./privacidade.page.scss'],
})
export class PrivacidadePage implements OnInit {

  public form = [
    { title: 'Contas bloqueadas', val: '', link: '/contas-bloqueadas' },
  ];


  constructor() { }

  ngOnInit() {
  }

}
