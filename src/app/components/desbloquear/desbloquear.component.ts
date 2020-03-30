import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-desbloquear',
  templateUrl: './desbloquear.component.html',
  styleUrls: ['./desbloquear.component.scss'],
})
export class DesbloquearComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }
}
