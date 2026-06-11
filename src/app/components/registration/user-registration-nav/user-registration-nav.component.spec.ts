import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserRegistrationNavComponent } from './user-registration-nav.component';

describe('UserRegistrationNavComponent', () => {
  let component: UserRegistrationNavComponent;
  let fixture: ComponentFixture<UserRegistrationNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), UserRegistrationNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserRegistrationNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
