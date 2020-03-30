import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendentesPage } from './pendentes.page';

describe('PendentesPage', () => {
  let component: PendentesPage;
  let fixture: ComponentFixture<PendentesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendentesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
