import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonNav,
  IonNote,
  IonToolbar,
  ModalController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  businessOutline,
  closeOutline,
  locationOutline,
  mailOutline,
  mapOutline,
  personOutline,
  planetOutline,
} from 'ionicons/icons';
import { NeighborRegistrationSuccessComponent } from '../../../pages/registration/neighbor-registration-success/neighbor-registration-success.component';
import { MvsIonicLoadingService } from '../../../services/mvs-ionic-loading.service';
import { CancelUserRegistrationAlert } from '../cancel-user-registration-alert/cancel-user-registration-alert';
import { MvsIonicAlertService } from '../../../services/mvs-ionic-alert-service';
import { DEFAULT_ION_LOADING_DURATION } from '../../../interfaces/global-constants';
import { LoginWorkflow } from '../../../interfaces/global-types';

@Component({
  selector: 'app-neighbor-registration-form',
  templateUrl: './neighbor-registration-form.component.html',
  styleUrls: ['./neighbor-registration-form.component.scss'],
  imports: [
    ReactiveFormsModule,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
    IonNote,
    IonItemDivider,
    IonToolbar,
    IonHeader,
    IonButtons,
    IonContent,
    CancelUserRegistrationAlert,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeighborRegistrationFormComponent {
  private registrationModalCtrl = inject(ModalController);
  private registrationNavCtx = inject(IonNav);
  private registrationSuccessComponent = NeighborRegistrationSuccessComponent;
  private mvsIonLoadingService = inject(MvsIonicLoadingService);
  private mvsIonAlertService = inject(MvsIonicAlertService);

  private registrationFormBuilder = inject(FormBuilder);
  @Input() loginWorkflow?: LoginWorkflow;

  constructor() {
    addIcons({
      personOutline,
      mailOutline,
      locationOutline,
      mapOutline,
      businessOutline,
      planetOutline,
      closeOutline,
    });
  }

  registrationForm = this.registrationFormBuilder.group({
    address: this.registrationFormBuilder.group({
      street: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      city: ['', [Validators.required]],
      country: ['Suisse', [Validators.required]],
    }),
    pseudo: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  });

  async onSubmit() {
    if (!this.registrationForm.valid) {
      try {
        this.mvsIonLoadingService.presentIonicLoadingSpinner(
          'Création de ton compte en cours...',
          DEFAULT_ION_LOADING_DURATION,
        );
        this.registerMvsNeighbor();
      } catch (error) {
        console.error('Error during neighbor registration:', error);
      }
    }
  }

  cancelNeighborRegistration() {
    this.mvsIonAlertService.presentIonicAlertMessage(
      'Annulation',
      'Voulez-vous vraiment annuler la création de votre compte ?',
      undefined,
      () => {
        this.registrationModalCtrl.dismiss(null, 'cancel');
      },
    );
  }

  registerMvsNeighbor() {
    // call register service
    setTimeout(async () => {
      this.registrationNavCtx.push(this.registrationSuccessComponent, {
        loginWorkflow: this.loginWorkflow,
      });
      console.log('Neighbor Registration Data:', this.registrationForm.value);
    }, DEFAULT_ION_LOADING_DURATION);
  }
}
