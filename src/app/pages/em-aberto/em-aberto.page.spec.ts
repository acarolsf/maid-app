import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmAbertoPage } from './em-aberto.page';

describe('EmAbertoPage', () => {
  let component: EmAbertoPage;
  let fixture: ComponentFixture<EmAbertoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmAbertoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmAbertoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
