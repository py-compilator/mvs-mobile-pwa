import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import {
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  mailOutline,
  lockClosedOutline,
  logoGoogle,
  logoFacebook,
  logoYahoo,
} from 'ionicons/icons';
import { UserAuthenticationService } from '../../../services/authentication/user-authentication-service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-neighbor-login',
  templateUrl: './neighbor-login.page.html',
  styleUrls: ['./neighbor-login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonButton, IonIcon],
})
export class NeighborLoginPage {

  private readonly _ngRouter = inject(Router);
  private _firebaseAuthService = new UserAuthenticationService();

  constructor() {
    addIcons({
      mailOutline,
      lockClosedOutline,
      logoGoogle,
      logoFacebook,
      logoYahoo,
    });
  }

  async handleAuthWithGoogle() {
    await this._firebaseAuthService.signInWithGoogle();
    await this._ngRouter.navigateByUrl(`/home`);
  }
}
