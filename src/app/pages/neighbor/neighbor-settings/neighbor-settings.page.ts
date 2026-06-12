import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IonAvatar, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { NeighborAuthenticationService } from '../../../services/authentication/neighbor-authentication-service';

@Component({
  selector: 'app-neighbor-settings',
  templateUrl: './neighbor-settings.page.html',
  styleUrls: ['./neighbor-settings.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    NgOptimizedImage,
    IonIcon,
    IonButtons,
    IonMenuButton,
    IonAvatar,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeighborSettingsPage implements OnInit {

  private _authService = inject(NeighborAuthenticationService);

  readonly currentUser = this._authService.user;

  constructor() {
  }

  ngOnInit() {}
}
