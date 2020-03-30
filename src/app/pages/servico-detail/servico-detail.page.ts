import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-servico-detail',
  templateUrl: './servico-detail.page.html',
  styleUrls: ['./servico-detail.page.scss'],
})
export class ServicoDetailPage implements OnInit {
  data: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {
    if (this.route.snapshot.data.special) {
      this.data = this.route.snapshot.data.special;
    }
  }

  finalizar() {
    const key = this.randomKey();
    this.dataService.setData(key, this.data);
    this.router.navigateByUrl('/finalizar-servico/' + this.randomKey());
  }

  randomKey() {
    const r = Math.floor(Math.random() * 10) + 1;
    return r;
  }

}
