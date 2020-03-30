import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-desbloquear',
  templateUrl: './desbloquear.component.html',
  styleUrls: ['./desbloquear.component.scss'],
})
export class DesbloquearComponent implements OnInit {

  @Input() nome: string;

  exibir: string;
  constructor(private modalController: ModalController, navParams: NavParams) {
    this.exibir = navParams.get('nome');
   }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }
}
