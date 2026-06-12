import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { IonAvatar, IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonInfiniteScroll,
  IonInfiniteScrollContent, IonItem,
  IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons,  } from 'ionicons';
import {
  chevronDownCircle,
  chevronForwardCircle,
  chevronUpCircle,
  colorPalette,
  document,
  globe,
} from 'ionicons/icons';

import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-mvs-events',
  templateUrl: './mvs-events.page.html',
  styleUrls: ['./mvs-events.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFab,
    IonFabButton,
    IonIcon,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonFabList,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MvsEventsPage implements OnInit {
  items: string[] = [];
  selectedItem = signal<string | null>(null);

  constructor() {
    /**
     * Any icons you want to use in your application
     * can be registered in app.component.ts and then
     * referenced by name anywhere in your application.
     */
    addIcons({
      chevronDownCircle,
      chevronForwardCircle,
      chevronUpCircle,
      colorPalette,
      document,
      globe,
    });
  }

  ngOnInit() {
    this.generateItems();
  }

  selectItem(item: string) {
    this.selectedItem.set(item);
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Événement MVS ${count + i}`);
    }
  }

  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }
}
