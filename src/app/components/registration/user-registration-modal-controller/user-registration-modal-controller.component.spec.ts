import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserRegistrationModalControllerComponent } from './user-registration-modal-controller.component';

describe('UserRegistrationModalControllerComponent', () => {
  let component: UserRegistrationModalControllerComponent;
  let fixture: ComponentFixture<UserRegistrationModalControllerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserRegistrationModalControllerComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(UserRegistrationModalControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
