import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewCampPage } from './new-camp.page';

describe('NewCampPage', () => {
  let component: NewCampPage;
  let fixture: ComponentFixture<NewCampPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCampPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewCampPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
