import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolicitarServicoPage } from './solicitar-servico.page';

describe('SolicitarServicoPage', () => {
  let component: SolicitarServicoPage;
  let fixture: ComponentFixture<SolicitarServicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarServicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitarServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
