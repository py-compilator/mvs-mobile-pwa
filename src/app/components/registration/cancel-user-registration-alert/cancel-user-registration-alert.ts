import { Component, output } from '@angular/core';
import { IonAlert } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cancel-user-registration-alert',
  templateUrl: './cancel-user-registration-alert.html',
  styleUrls: ['./cancel-user-registration-alert.scss'],
  imports: [IonAlert],
})
export class CancelUserRegistrationAlert {
  onUserRegistrationWorkflowCancelled = output<boolean>();

  public alertButtons = [
    {
      text: 'Non',
      role: 'cancel',
      handler: () => {},
    },
    {
      text: 'Oui',
      role: 'confirm',
      handler: () => {},
    },
  ];
}
