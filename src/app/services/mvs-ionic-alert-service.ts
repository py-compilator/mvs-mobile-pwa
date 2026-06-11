import { inject, Injectable } from '@angular/core';
import { AlertButton, AlertController } from '@ionic/angular';
import {
  DEFAULT_ION_ALERT_HEADER_MESSAGE,
  DEFAULT_ION_ALERT_MESSAGE,
  DEFAULT_ION_ALERT_SUB_HEADER_MESSAGE,
} from '../interfaces/global-constants';

@Injectable({
  providedIn: 'root',
})
export class MvsIonicAlertService {
  private alertController = inject(AlertController);
  public static readonly DEFAULT_OK_CANCEL_ALERT_BUTTONS = [
    {
      text: 'Reculer',
      role: 'cancel',
      cssClass: 'alert-button-cancel',
      handler: () => {},
    },
  ];

  constructor() {}

  async buildAndPresentIonicAlertMessage(
    header?: string,
    subHeader?: string,
    message?: string,
    userConfirmationHandler?: () => void,
  ) {

    const confirmActionHandler: AlertButton = {
      text: "D'accord",
      role: 'confirm',
      cssClass: 'alert-button-confirm',
      handler: userConfirmationHandler,
    };

    const alert = await this.alertController.create({
      header: header ?? DEFAULT_ION_ALERT_HEADER_MESSAGE,
      subHeader: subHeader ?? DEFAULT_ION_ALERT_SUB_HEADER_MESSAGE,
      message: message ?? DEFAULT_ION_ALERT_MESSAGE,
      cssClass: 'custom-alert',
      buttons: [...MvsIonicAlertService.DEFAULT_OK_CANCEL_ALERT_BUTTONS, confirmActionHandler],
    });

    await alert.present();
  }
}
