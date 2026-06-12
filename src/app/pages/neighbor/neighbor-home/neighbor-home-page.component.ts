import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu,
  IonMenuButton, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { logOutOutline, radio, navigate, settings } from 'ionicons/icons';
import { NeighborAuthenticationService } from '../../../services/authentication/neighbor-authentication-service';
import { MvsIonicLoadingService } from '../../../services/ionic/mvs-ionic-loading.service';
import { DEFAULT_ION_LOADING_DURATION } from '../../../interfaces/global-constants';

@Component({
  selector: 'app-neighbor-home',
  templateUrl: './neighbor-home-page.component.html',
  styleUrls: ['./neighbor-home-page.component.scss'],
  imports: [
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonIcon,
    IonLabel,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonMenuButton,
    IonList,
    IonItem,
    RouterLink,
    IonButton,
    IonFooter,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeighborHomePage implements OnInit {
  private mvsIonLoadingService = inject(MvsIonicLoadingService);
  private _authService = inject(NeighborAuthenticationService);
  private _router = inject(Router);

  constructor() {
    addIcons({ logOutOutline, radio, navigate, settings });
  }

  ngOnInit() {}

  async logout() {
    try {
      await this._authService.signOut();
      this.mvsIonLoadingService.presentIonicLoadingSpinner(
        'Déconnexion en cours...',
        DEFAULT_ION_LOADING_DURATION,
      );
      setTimeout(async () => {
        await this._router.navigate(['/login']);
      }, DEFAULT_ION_LOADING_DURATION);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  }
}
