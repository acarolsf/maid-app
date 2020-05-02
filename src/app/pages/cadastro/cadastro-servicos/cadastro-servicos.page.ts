import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-servicos',
  templateUrl: './cadastro-servicos.page.html',
  styleUrls: ['./cadastro-servicos.page.scss'],
})
export class CadastroServicosPage implements OnInit {

  servicos: Array<{servico: string}>;
  servicesForm: FormGroup;
  index: number;
  // servico: any;

  constructor(private toastController: ToastController, private formBuilder: FormBuilder) {
    this.servicos = [];
    this.index = 0;
    this.servicesForm = this.formBuilder.group({
      nome: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  addItem() {
    if (this.servicesForm.value.nome) {
      this.servicos.push({
        servico: this.servicesForm.value
      });
      this.servicesForm.reset();
    } else {
      this.presentToast();
    }
    console.log(this.servicos);
  }

  remove(item, event) {
    this.servicos.splice(item, 1);
    console.log(this.servicos);
  }

  finalizar() {
    this.toastFim();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Por favor, digite algo!',
      duration: 2000
    });
    toast.present();
  }

  async toastFim() {
    const toast = await this.toastController.create({
      message: 'Cadastro realizado com sucesso!',
      duration: 2000
    });
    toast.present();
  }
}
