import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Plugins } from '@capacitor/core';
import { Router, ActivatedRoute } from '@angular/router';
const { Geolocation } = Plugins;

declare var google;

@Component({
  selector: 'app-servico-detail',
  templateUrl: './servico-detail.page.html',
  styleUrls: ['./servico-detail.page.scss'],
})
export class ServicoDetailPage implements OnInit {
  data: any;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    if (this.route.snapshot.data.special) {
      this.data = this.route.snapshot.data.special;
    }
  }

}
