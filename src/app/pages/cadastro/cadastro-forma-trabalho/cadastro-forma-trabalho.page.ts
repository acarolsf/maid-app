import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-forma-trabalho',
  templateUrl: './cadastro-forma-trabalho.page.html',
  styleUrls: ['./cadastro-forma-trabalho.page.scss'],
})
export class CadastroFormaTrabalhoPage implements OnInit {

  cadForm: FormGroup;
  // numberMask = createNumberMask({ prefix: '', thousandsSeparatorSymbol: ',', allowDecimal: true, decimalSymbol: '.' });
  constructor(private formBuilder: FormBuilder) {
    this.cadForm = this.formBuilder.group({
      formaTrab: ['', Validators.required],
      preco: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  next() {
    console.log(this.cadForm.value);
  }

}
