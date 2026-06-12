import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-mvs-map',
  templateUrl: './mvs-map.page.html',
  styleUrls: ['./mvs-map.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar],
})
export class MvsMapPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
