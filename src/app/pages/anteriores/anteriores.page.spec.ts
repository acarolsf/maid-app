import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnterioresPage } from './anteriores.page';

describe('AnterioresPage', () => {
  let component: AnterioresPage;
  let fixture: ComponentFixture<AnterioresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnterioresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnterioresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
