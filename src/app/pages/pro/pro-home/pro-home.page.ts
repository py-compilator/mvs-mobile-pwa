import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonMenuToggle,
  IonRow,
  IonSplitPane,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  calendarOutline,
  gridOutline,
  logOutOutline,
  notificationsOutline,
  peopleOutline,
  settingsOutline,
  statsChartOutline,
} from 'ionicons/icons';
import { Router } from '@angular/router';
import { DEFAULT_ION_LOADING_DURATION } from '../../../interfaces/global-constants';
import { MvsIonicLoadingService } from '../../../services/ionic/mvs-ionic-loading.service';

@Component({
  selector: 'app-pro-neighbor-home',
  templateUrl: './pro-home.page.html',
  styleUrls: ['./pro-home.page.scss'],
  imports: [
    IonSplitPane,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonMenuToggle,
    IonButton,
    IonButtons,
    IonMenuButton,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonFooter,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProHomePage implements OnInit {

  private mvsIonLoadingService = inject(MvsIonicLoadingService);

  public menuItems = [
    { title: 'Tableau de bord', icon: 'grid-outline' },
    { title: 'Voisins', icon: 'people-outline' },
    { title: 'Mes Événements', icon: 'calendar-outline' },
    { title: 'Paramètres', icon: 'settings-outline' },
  ];

  private readonly _ngRouter = inject(Router);

  constructor() {
    addIcons({
      gridOutline,
      peopleOutline,
      settingsOutline,
      logOutOutline,
      statsChartOutline,
      notificationsOutline,
      calendarOutline,
    });
  }

  ngOnInit() {}

  logout() {
    try {
      this.mvsIonLoadingService.presentIonicLoadingSpinner(
        'Déconnexion en cours...',
        DEFAULT_ION_LOADING_DURATION,
      );
      setTimeout(async () => {
        this._ngRouter.navigateByUrl(`/login`);
      }, DEFAULT_ION_LOADING_DURATION);
    } catch (error) {
      console.error('Error during neighbor registration:', error);
    }
  }
}
