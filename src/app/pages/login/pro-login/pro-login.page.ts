import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  IonButton,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonItem,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { lockClosedOutline, logoFacebook, logoGoogle, mailOutline } from 'ionicons/icons';
import { Router } from '@angular/router';
import { ProAuthenticationService } from '../../../services/authentication/pro-authentication-service';

@Component({
  selector: 'app-pro-login',
  templateUrl: './pro-login.page.html',
  styleUrls: ['./pro-login.page.scss'],
  imports: [IonItem, IonIcon, IonInput, IonButton, IonInputPasswordToggle],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProLoginPage {

  private readonly _ngRouter = inject(Router);
  private readonly _proAuthenticationService = inject(ProAuthenticationService);

  constructor() {
    addIcons({ logoGoogle, logoFacebook, mailOutline, lockClosedOutline });
  }

  async handleMvsProUserAuth() {
    try {
      await this._proAuthenticationService.signProEmailAndPassword();
      await this._ngRouter.navigateByUrl(`/pro-home`);
    } catch (error) {
      console.error('Error during login:', error);
    }
  }
}
