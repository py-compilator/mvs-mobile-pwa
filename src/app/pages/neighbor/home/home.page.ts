import { Component, OnInit } from '@angular/core';
import { IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon],
})
export class HomePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
