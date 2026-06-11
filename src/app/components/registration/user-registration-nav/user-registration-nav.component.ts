import { Component, inject, signal } from '@angular/core';
import { IonNav, NavParams } from '@ionic/angular/standalone';
import { NeighborRegistrationFormComponent } from '../neighbor-registration-form/neighbor-registration-form.component';
import { LoginWorkflow } from '../../../interfaces/global-types';
import { ProRegistrationFormComponent } from '../pro-registration-form/pro-registration-form.component';

@Component({
  selector: 'app-user-registration-nav',
  templateUrl: './user-registration-nav.component.html',
  styleUrls: ['./user-registration-nav.component.scss'],
  imports: [IonNav],
})
export class UserRegistrationNavComponent {
  protected readonly proRegistrationFormComponent = ProRegistrationFormComponent;
  protected readonly neighborRegistrationFormComponent = NeighborRegistrationFormComponent;

  protected readonly LoginWorkflow = LoginWorkflow;

  private navParams = inject(NavParams);

  $userRegistrationWorkflow = signal<LoginWorkflow>(
    this.navParams.get('ionicRegistrationWorkflow') ?? undefined,
  );

  constructor() {}
}
