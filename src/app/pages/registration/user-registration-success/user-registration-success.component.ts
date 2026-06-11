import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { IonButton, IonContent, IonIcon, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-user-registration-success',
  templateUrl: './user-registration-success.component.html',
  styleUrls: ['./user-registration-success.component.scss'],
  imports: [IonButton, IonContent, IonIcon,],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserRegistrationSuccessComponent {

  private registrationModalCtrl = inject(ModalController);

  constructor() {
    addIcons({ checkmarkCircleOutline });
  }

  closeUserRegistrationModal() {
    this.registrationModalCtrl.dismiss();
  }
}
