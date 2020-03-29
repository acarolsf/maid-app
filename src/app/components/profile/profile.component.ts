import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  @Input() key: string;
  @Input() nome: string;
  @Input() cidade: string;
  @Input() email: string;
  @Input() telefone: string;



  constructor(navParams: NavParams, private router: Router, private modalController: ModalController) {

      this.key = navParams.get('key');
      this.nome = navParams.get('nome');
      this.cidade = navParams.get('cidade');
      this.email = navParams.get('email');
      this.telefone = navParams.get('telefone');
  }

  ngOnInit() {}

  profile() {
    this.router.navigateByUrl('/profile');
    this.modalController.dismiss();
  }

  sendEmail() {
    console.log('enviar email');
    this.modalController.dismiss();
  }

  call() {
    console.log('ligar');
    this.modalController.dismiss();
  }
}
