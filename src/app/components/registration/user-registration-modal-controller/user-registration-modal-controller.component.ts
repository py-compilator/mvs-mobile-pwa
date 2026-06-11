import { Component, input, OnInit } from '@angular/core';
import { IonButton, ModalController } from '@ionic/angular/standalone';
import { LoginWorkflow } from '../../../interfaces/global-types';
import { UserRegistrationNavComponent } from '../user-registration-nav/user-registration-nav.component';

@Component({
  selector: 'app-user-registration-modal-controller',
  templateUrl: './user-registration-modal-controller.component.html',
  styleUrls: ['./user-registration-modal-controller.component.scss'],
  imports: [IonButton],
})
export class UserRegistrationModalControllerComponent implements OnInit {
  loginWorkflow = input.required<LoginWorkflow>();

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  async openUserRegistrationModal() {
    if (this.loginWorkflow() === LoginWorkflow.Neighbor) {
      await this.openNeighborRegistrationModal();
    } else if (this.loginWorkflow() === LoginWorkflow.Pro) {
      await this.openProRegistrationModal();
    }
  }

  async openNeighborRegistrationModal() {
    const modal = await this.modalCtrl.create({
      component: UserRegistrationNavComponent,
    });
    modal.present();
  }

  async openProRegistrationModal() {}
}
