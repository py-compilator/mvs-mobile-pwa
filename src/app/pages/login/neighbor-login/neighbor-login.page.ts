import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
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

@Component({
  selector: 'app-neighbor-login',
  templateUrl: './neighbor-login.page.html',
  styleUrls: ['./neighbor-login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonButton,
    IonIcon
  ],
})
export class NeighborLoginPage {
  constructor() {
    addIcons({
      mailOutline,
      lockClosedOutline,
      logoGoogle,
      logoFacebook,
      logoYahoo,
    });
  }
}
