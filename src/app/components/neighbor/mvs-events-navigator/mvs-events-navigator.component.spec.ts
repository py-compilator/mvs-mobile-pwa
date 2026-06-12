import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MvsEventsNavigatorComponent } from './mvs-events-navigator.component';

describe('MvsEventsNavigatorComponent', () => {
  let component: MvsEventsNavigatorComponent;
  let fixture: ComponentFixture<MvsEventsNavigatorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MvsEventsNavigatorComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(MvsEventsNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
