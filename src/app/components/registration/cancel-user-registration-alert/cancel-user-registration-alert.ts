import { Component, OnInit, output } from '@angular/core';
import { IonAlert, IonButton } from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core';

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
      handler: () => {
        console.log('User registration maintained !');
      },
    },
    {
      text: 'Oui',
      role: 'confirm',
      handler: () => {
        this.onUserRegistrationWorkflowCancelled.emit(true);
        console.log('User registration cancelled !');
      },
    },
  ];
}
