import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CancelUserRegistrationAlert } from './cancel-user-registration-alert';

describe('CancelUserRegistrationAlert', () => {
  let component: CancelUserRegistrationAlert;
  let fixture: ComponentFixture<CancelUserRegistrationAlert>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CancelUserRegistrationAlert],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(CancelUserRegistrationAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
