import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CampDetailPage } from './camp-detail.page';

describe('CampDetailPage', () => {
  let component: CampDetailPage;
  let fixture: ComponentFixture<CampDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CampDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
