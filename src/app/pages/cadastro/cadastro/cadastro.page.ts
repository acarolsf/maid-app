import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  nome: string;
  tipoConta: string;
  cidade: string;
  email: string;
  senha: string;
  usuario: any;
  cadForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.cadForm = this.formBuilder.group({
      nome: [this.nome, Validators.required],
      tipoConta: [this.tipoConta, Validators.required],
      cidade: [this.cidade, Validators.required],
      email: [this.email, Validators.compose([
       Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      senha: [this.senha, Validators.compose([
        Validators.required, Validators.minLength(6)])]
    });
  }

  ngOnInit() {
  }

  openNext() {
    if (this.cadForm.value.tipoConta === 'empregador') {
      console.log(this.cadForm.value);
      this.router.navigateByUrl('/login');
    } else {
      this.router.navigateByUrl('/cadastro-forma-trabalho');
    }
  }

}
