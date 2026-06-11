import { Component } from '@angular/core';
import { LoginWorkflow } from '../../interfaces/login-workflow';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonLabel,
  IonSegment,
  IonSegmentButton,
  IonSegmentContent,
  IonSegmentView,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { lockClosedOutline, mailOutline } from 'ionicons/icons';
import { ProLoginPage } from './pro-login/pro-login.page';
import { NeighborLoginPage } from './neighbor-login/neighbor-login.page';
import { UserRegistrationModalControllerComponent } from '../../components/registration/user-registration-modal-controller/user-registration-modal-controller.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    FormsModule,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonSegmentView,
    IonSegmentContent,
    ProLoginPage,
    NeighborLoginPage,
    UserRegistrationModalControllerComponent,
  ],
})
export class LoginPage {
  protected currentLoginWorkflow: LoginWorkflow = LoginWorkflow.Neighbor;
  protected readonly LoginWorkflow = LoginWorkflow;

  constructor() {
    addIcons({ mailOutline, lockClosedOutline });
  }

  setLoginWorkflow(loginWorkflow: LoginWorkflow) {
    this.currentLoginWorkflow = loginWorkflow;
  }
}
