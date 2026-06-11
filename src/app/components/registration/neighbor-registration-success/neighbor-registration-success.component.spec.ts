import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NeighborRegistrationSuccessComponent } from './neighbor-registration-success.component';

describe('NeighborRegistrationSuccessComponent', () => {
  let component: NeighborRegistrationSuccessComponent;
  let fixture: ComponentFixture<NeighborRegistrationSuccessComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NeighborRegistrationSuccessComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(NeighborRegistrationSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
