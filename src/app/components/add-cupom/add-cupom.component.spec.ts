import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddCupomComponent } from './add-cupom.component';

describe('AddCupomComponent', () => {
  let component: AddCupomComponent;
  let fixture: ComponentFixture<AddCupomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCupomComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddCupomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
