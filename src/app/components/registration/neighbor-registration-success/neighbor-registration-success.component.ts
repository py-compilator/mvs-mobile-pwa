import { Component, inject, OnInit } from '@angular/core';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonNav, ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-neighbor-registration-success',
  templateUrl: './neighbor-registration-success.component.html',
  styleUrls: ['./neighbor-registration-success.component.scss'],
  imports: [IonButton, IonCard, IonCardContent, IonCardHeader],
})
export class NeighborRegistrationSuccessComponent implements OnInit {
  private registrationModalCtrl = inject(ModalController);

  constructor() {}

  ngOnInit() {}

  closeUserRegistrationModal() {
    this.registrationModalCtrl.dismiss();
  }
}
