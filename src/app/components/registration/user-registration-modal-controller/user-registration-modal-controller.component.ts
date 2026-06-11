import { Component, inject, input, OnInit } from '@angular/core';
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
  private userRegistrationModalController = inject(ModalController);

  constructor() {}

  ngOnInit() {}

  async openUserRegistrationModal() {
    if (this.loginWorkflow() === LoginWorkflow.Neighbor) {
      await this.openNeighborRegistrationModal();
    } else if (this.loginWorkflow() === LoginWorkflow.Pro) {
      await this.openProRegistrationModal();
    }
  }

  async openNeighborRegistrationModal() {
    const modal = await this.userRegistrationModalController.create({
      component: UserRegistrationNavComponent,
      componentProps: {
        workflowType: this.loginWorkflow(),
      },
    });
    modal.present();
  }

  async openProRegistrationModal() {
    const modal = await this.userRegistrationModalController.create({
      component: UserRegistrationNavComponent,
      componentProps: {
        workflowType: this.loginWorkflow(),
      },
    });
    modal.present();
  }
}
