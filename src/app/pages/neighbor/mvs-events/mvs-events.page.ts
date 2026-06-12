import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { IonAvatar, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInfiniteScroll,
  IonInfiniteScrollContent, IonItem,
  IonLabel, IonList, IonMenuButton, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { addIcons,  } from 'ionicons';
import {
  chevronForwardCircle,
  chevronUpCircle,
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
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonButtons,
    IonMenuButton,
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
      chevronForwardCircle,
      chevronUpCircle,
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
