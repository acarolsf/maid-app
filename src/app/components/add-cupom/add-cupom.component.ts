import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-cupom',
  templateUrl: './add-cupom.component.html',
  styleUrls: ['./add-cupom.component.scss'],
})
export class AddCupomComponent implements OnInit {

  @Input() cupom: string;

  constructor(navParams: NavParams, private modalController: ModalController) {
    console.log(navParams.get('cupom'));
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }

  ngOnInit() {}

}
