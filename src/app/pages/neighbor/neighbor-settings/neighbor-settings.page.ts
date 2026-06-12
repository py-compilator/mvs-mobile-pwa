import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';
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
    IonButtons,
    IonMenuButton,
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
