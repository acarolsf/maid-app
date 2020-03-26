import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AgendadasPage } from './agendadas.page';

describe('AgendadasPage', () => {
  let component: AgendadasPage;
  let fixture: ComponentFixture<AgendadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AgendadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
