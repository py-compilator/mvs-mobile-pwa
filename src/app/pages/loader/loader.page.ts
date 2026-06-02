import { Component, OnInit } from '@angular/core';
import { IonContent, IonSpinner } from '@ionic/angular/standalone';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
  imports: [IonContent, IonSpinner],
})
export class LoaderPage implements OnInit {

  constructor() {}

  ngOnInit() {}
}
