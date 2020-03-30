import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DesbloquearComponent } from './desbloquear.component';

describe('DesbloquearComponent', () => {
  let component: DesbloquearComponent;
  let fixture: ComponentFixture<DesbloquearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesbloquearComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DesbloquearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
