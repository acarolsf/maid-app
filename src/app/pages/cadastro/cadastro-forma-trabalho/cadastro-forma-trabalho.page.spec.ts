import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroFormaTrabalhoPage } from './cadastro-forma-trabalho.page';

describe('CadastroFormaTrabalhoPage', () => {
  let component: CadastroFormaTrabalhoPage;
  let fixture: ComponentFixture<CadastroFormaTrabalhoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroFormaTrabalhoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroFormaTrabalhoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
