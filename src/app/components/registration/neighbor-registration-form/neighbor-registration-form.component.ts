import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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
  ModalController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  businessOutline,
  closeOutline,
  locationOutline,
  mailOutline,
  mapOutline,
  personOutline,
  planetOutline
} from 'ionicons/icons';
import {
  UserRegistrationSuccessComponent
} from '../../../pages/registration/user-registration-success/user-registration-success.component';
import { MvsIonicLoadingService } from '../../../services/mvs-ionic-loading.service';
import { MvsIonicAlertService } from '../../../services/mvs-ionic-alert-service';
import { DEFAULT_ION_LOADING_DURATION } from '../../../interfaces/global-constants';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NeighborRegistrationFormComponent {
  private registrationModalCtrl = inject(ModalController);
  private registrationNavCtx = inject(IonNav);

  private mvsIonLoadingService = inject(MvsIonicLoadingService);
  private mvsIonAlertService = inject(MvsIonicAlertService);

  private registrationSuccessComponent = UserRegistrationSuccessComponent;

  private registrationFormBuilder = inject(FormBuilder);
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
    this.mvsIonAlertService.buildAndPresentIonicAlertMessage(
      'Annulation',
      "Êtes-vous sûr d'abandonner vos voisins ?",
      undefined,
      () => {
        this.registrationModalCtrl.dismiss(null, 'cancel');
      },
    );
  }

  registerMvsNeighbor() {
    // call register service
    setTimeout(async () => {
      this.registrationNavCtx.push(this.registrationSuccessComponent);
      console.log('Neighbor Registration Data:', this.registrationForm.value);
    }, DEFAULT_ION_LOADING_DURATION);
  }
}
