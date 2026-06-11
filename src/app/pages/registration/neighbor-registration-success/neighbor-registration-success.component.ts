import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { IonButton, IonContent, IonIcon, IonNote, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline } from 'ionicons/icons';
import { LoginWorkflow } from '../../../interfaces/global-types';

@Component({
  selector: 'app-neighbor-registration-success',
  templateUrl: './neighbor-registration-success.component.html',
  styleUrls: ['./neighbor-registration-success.component.scss'],
  imports: [IonButton, IonContent, IonIcon,],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeighborRegistrationSuccessComponent implements OnInit {
  private registrationModalCtrl = inject(ModalController);
  @Input() loginWorkflow?: LoginWorkflow;

  constructor() {
    addIcons({ checkmarkCircleOutline });
  }

  ngOnInit() {}

  closeUserRegistrationModal() {
    this.registrationModalCtrl.dismiss();
  }
}
