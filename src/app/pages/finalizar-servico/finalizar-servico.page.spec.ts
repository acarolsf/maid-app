import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FinalizarServicoPage } from './finalizar-servico.page';

describe('FinalizarServicoPage', () => {
  let component: FinalizarServicoPage;
  let fixture: ComponentFixture<FinalizarServicoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizarServicoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FinalizarServicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
