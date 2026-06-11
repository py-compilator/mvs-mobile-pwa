import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NeighborRegistrationFormComponent } from './neighbor-registration-form.component';

describe('NeighborRegistrationFormComponent', () => {
  let component: NeighborRegistrationFormComponent;
  let fixture: ComponentFixture<NeighborRegistrationFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NeighborRegistrationFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NeighborRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
