import { Component, inject } from '@angular/core';
import { IonAlert, IonContent, ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cancel-user-registration-alert',
  templateUrl: './cancel-user-registration-alert.html',
  styleUrls: ['./cancel-user-registration-alert.scss'],
  imports: [IonAlert, IonContent],
})
export class CancelUserRegistrationAlert {
  private registrationModalCtrl = inject(ModalController);

  public alertButtons = [
    {
      text: 'Reculer',
      role: 'cancel',
      cssClass: 'alert-button-cancel',
      handler: () => {},
    },
    {
      text: "D'accord",
      role: 'confirm',
      cssClass: 'alert-button-confirm',
      handler: () => {
        this.registrationModalCtrl.dismiss();
      },
    },
  ];
}
