import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-neighbor-settings',
  templateUrl: './neighbor-settings.page.html',
  styleUrls: ['./neighbor-settings.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar],
})
export class NeighborSettingsPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
