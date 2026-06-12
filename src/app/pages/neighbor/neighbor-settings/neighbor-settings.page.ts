import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IonAvatar, IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';
import { UserAuthenticationService } from '../../../services/authentication/user-authentication-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-neighbor-settings',
  templateUrl: './neighbor-settings.page.html',
  styleUrls: ['./neighbor-settings.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonList, IonItem, IonLabel, IonAvatar, NgOptimizedImage, IonIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeighborSettingsPage implements OnInit {
  private _authService = inject(UserAuthenticationService);
  private _router = inject(Router);

  readonly currentUser = this._authService.user;

  constructor() {
    addIcons({ logOutOutline });
  }

  ngOnInit() {}

  async logout() {
    await this._authService.signOut();
    await this._router.navigate(['/login']);
  }
}
