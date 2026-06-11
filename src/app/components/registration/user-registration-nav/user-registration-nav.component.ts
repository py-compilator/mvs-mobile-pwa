import { Component } from '@angular/core';
import { IonNav } from '@ionic/angular/standalone';
import { NeighborRegistrationFormComponent } from '../neighbor-registration-form/neighbor-registration-form.component';

@Component({
  selector: 'app-user-registration-nav',
  templateUrl: './user-registration-nav.component.html',
  styleUrls: ['./user-registration-nav.component.scss'],
  imports: [IonNav],
})
export class UserRegistrationNavComponent {

  protected readonly neighborRegistrationFormComponent = NeighborRegistrationFormComponent;

  constructor() {}
}
