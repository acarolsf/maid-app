import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AceitasPage } from './aceitas.page';

describe('AceitasPage', () => {
  let component: AceitasPage;
  let fixture: ComponentFixture<AceitasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceitasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AceitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
