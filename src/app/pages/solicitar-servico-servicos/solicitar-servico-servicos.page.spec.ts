import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolicitarServicoServicosPage } from './solicitar-servico-servicos.page';

describe('SolicitarServicoServicosPage', () => {
  let component: SolicitarServicoServicosPage;
  let fixture: ComponentFixture<SolicitarServicoServicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarServicoServicosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitarServicoServicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
