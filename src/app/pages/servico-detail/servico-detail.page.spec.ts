import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicoDetailPage } from './servico-detail.page';

describe('ServicoDetailPage', () => {
  let component: ServicoDetailPage;
  let fixture: ComponentFixture<ServicoDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicoDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicoDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
