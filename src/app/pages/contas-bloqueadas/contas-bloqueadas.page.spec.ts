import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContasBloqueadasPage } from './contas-bloqueadas.page';

describe('ContasBloqueadasPage', () => {
  let component: ContasBloqueadasPage;
  let fixture: ComponentFixture<ContasBloqueadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasBloqueadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContasBloqueadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
