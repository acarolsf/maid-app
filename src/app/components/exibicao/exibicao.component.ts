import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-exibicao',
  templateUrl: './exibicao.component.html',
  styleUrls: ['./exibicao.component.scss'],
})
export class ExibicaoComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }

  ngOnInit() {}

}
