import { Component, inject, output } from '@angular/core';
import { IonAlert, ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cancel-user-registration-alert',
  templateUrl: './cancel-user-registration-alert.html',
  styleUrls: ['./cancel-user-registration-alert.scss'],
  imports: [IonAlert],
})
export class CancelUserRegistrationAlert {

  private registrationModalCtrl = inject(ModalController);

  public alertButtons = [
    {
      text: 'Non',
      role: 'cancel',
      cssClass: 'alert-button-cancel',
      handler: () => {},
    },
    {
      text: 'Oui',
      role: 'confirm',
      cssClass: 'alert-button-confirm',
      handler: () => {
        this.registrationModalCtrl.dismiss();
      },
    },
  ];
}
