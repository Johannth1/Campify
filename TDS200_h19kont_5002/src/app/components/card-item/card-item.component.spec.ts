import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { cardItemComponent } from './card-item.component';

describe('CardItemComponent', () => {
  let component: cardItemComponent;
  let fixture: ComponentFixture<cardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ cardItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(cardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
