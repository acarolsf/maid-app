import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { Plugins } from '@capacitor/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  email: string;
  senha: string;

  constructor(
    private menuController: MenuController,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: [this.email, Validators.compose([
        Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
       senha: [this.senha, Validators.compose([
         Validators.required, Validators.minLength(6)])]
    });
   }

  ngOnInit() {
    this.menuController.enable(false);
  }

  onSubmit() {
    // let data = this.loginForm.value;
  }

  ionViewWillEnter() {
    this.getCurrentState();
  }
  async getCurrentState() {
    const result = await Plugins.FacebookLogin.getCurrentAccessToken();
    try {
      console.log(result);
      if (result && result.accessToken) {
        let user = { token: result.accessToken.token, userId: result.accessToken.userId }
        let navigationExtras: NavigationExtras = {
          queryParams: {
            userinfo: JSON.stringify(user)
          }
        };
        this.router.navigate(['/home'], navigationExtras);
      }
    } catch (e) {
      console.log(e);
    }
  }

  async signIn(): Promise<void> {
    const FACEBOOK_PERMISSIONS = ['public_profile', 'email'];

    const result = await Plugins.FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });
    if (result && result.accessToken) {
      let user = { token: result.accessToken.token, userId: result.accessToken.userId }
      let navigationExtras: NavigationExtras = {
        queryParams: {
          userinfo: JSON.stringify(user)
        }
      };
      this.router.navigate(['/home'], navigationExtras);
    }
  }

}
