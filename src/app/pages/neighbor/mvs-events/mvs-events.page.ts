import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-mvs-events',
  templateUrl: './mvs-events.page.html',
  styleUrls: ['./mvs-events.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})
export class MvsEventsPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
