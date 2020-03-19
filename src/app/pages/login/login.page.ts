import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // loginForm: FormGroup;
  email: string;
  password: string;
  // constructor(private menuController: MenuController, fb: FormBuilder) {
    constructor(private menuController: MenuController) {
    // this.loginForm = fb.group({
    //   email: [this.email, Validators.required, Validators.email],
    //   password: [this.password, Validators.compose([Validators.required, Validators.minLength(6)])]
    // });
   }

  ngOnInit() {
    this.menuController.enable(false);
  }

  onSubmit() {
    // let data = this.loginForm.value;
  }

}
