import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserRegistrationSuccessComponent } from './user-registration-success.component';

describe('UserRegistrationSuccessComponent', () => {
  let component: UserRegistrationSuccessComponent;
  let fixture: ComponentFixture<UserRegistrationSuccessComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserRegistrationSuccessComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(UserRegistrationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
