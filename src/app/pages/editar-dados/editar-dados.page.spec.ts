import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditarDadosPage } from './editar-dados.page';

describe('EditarDadosPage', () => {
  let component: EditarDadosPage;
  let fixture: ComponentFixture<EditarDadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarDadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditarDadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
