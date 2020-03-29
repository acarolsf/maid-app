import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  comments: Array<{nome: string, cidade: string, rating: string, comentario: string}>;
  profileType: any;
  constructor() {
    this.profileType = 'not-user';
    this.comments = [];
    this.comments.push({
      nome: 'Cleide',
      cidade: 'Seattle',
      rating: '4',
      comentario: 'Muito boa, recomendo sempre!'
    });
    this.comments.push({
      nome: 'Cleide',
      cidade: 'Seattle',
      rating: '4',
      comentario: 'Muito boa, recomendo sempre!'
    });
    this.comments.push({
      nome: 'Cleide',
      cidade: 'Seattle',
      rating: '4',
      comentario: 'Muito boa, recomendo sempre!'
    });
    this.comments.push({
      nome: 'Cleide',
      cidade: 'Seattle',
      rating: '4',
      comentario: 'Muito boa, recomendo sempre!'
    });
    this.comments.push({
      nome: 'Cleide',
      cidade: 'Seattle',
      rating: '4',
      comentario: 'Muito boa, recomendo sempre!'
    });
    this.comments.push({
      nome: 'Cleide',
      cidade: 'Seattle',
      rating: '4',
      comentario: 'Muito boa, recomendo sempre!'
    });
    this.comments.push({
      nome: 'Cleide',
      cidade: 'Seattle',
      rating: '4',
      comentario: 'Muito boa, recomendo sempre!'
    });
    this.comments.push({
      nome: 'Cleide',
      cidade: 'Seattle',
      rating: '4',
      comentario: 'Muito boa, recomendo sempre!'
    });
    this.comments.push({
      nome: 'Cleide',
      cidade: 'Seattle',
      rating: '4',
      comentario: 'Muito boa, recomendo sempre!'
    });
  }

  ngOnInit() {
  }

}
