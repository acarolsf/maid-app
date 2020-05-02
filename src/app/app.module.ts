import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import '@codetrix-studio/capacitor-google-auth';

import { AddCupomComponent } from './components/add-cupom/add-cupom.component';
import { ExibicaoComponent } from './components/exibicao/exibicao.component';
import { NotificacoesComponent } from './components/notificacoes/notificacoes.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DesbloquearComponent } from './components/desbloquear/desbloquear.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCupomComponent,
    ExibicaoComponent,
    NotificacoesComponent,
    ProfileComponent,
    DesbloquearComponent,
  ],
  entryComponents: [
    AddCupomComponent,
    ExibicaoComponent,
    NotificacoesComponent,
    ProfileComponent,
    DesbloquearComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
