import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  IonApp,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonRouterOutlet,
  IonSplitPane,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  imports: [
    IonMenu,
    IonApp,
    IonSplitPane,
    IonContent,
    IonList,
    IonListHeader,
    IonNote,
    IonMenuToggle,
    IonItem,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('mvs-mobile-pwa');
  public appPages = [
    { title: 'Home', url: '/home', icon: 'paper-plane' },
    { title: 'About', url: '/about', icon: 'archive' },
    { title: 'Contact', url: '/contact', icon: 'trash' },
  ];
}
