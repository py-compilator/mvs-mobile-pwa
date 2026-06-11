import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { IonButton, IonIcon, IonInput,
  IonInputPasswordToggle, IonItem } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoFacebook, logoGoogle, mailOutline, lockClosedOutline } from 'ionicons/icons';

@Component({
  selector: 'app-pro-login',
  templateUrl: './pro-login.page.html',
  styleUrls: ['./pro-login.page.scss'],
  imports: [
    IonItem,
    IonIcon,
    IonInput,
    IonButton,
    IonInputPasswordToggle
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProLoginPage {
  constructor() {
    addIcons({ logoGoogle, logoFacebook, mailOutline, lockClosedOutline });
  }
}
