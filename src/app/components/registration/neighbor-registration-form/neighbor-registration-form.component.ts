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
import { NeighborRegistrationSuccessComponent } from '../neighbor-registration-success/neighbor-registration-success.component';
import { MvsIonicLoadingService } from '../../../services/mvs-ionic-loading.service';

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
  private loadingService = inject(MvsIonicLoadingService);
  private registrationNav = inject(IonNav);
  private registrationFormBuilder = inject(FormBuilder);
  private registrationSuccessComponent = NeighborRegistrationSuccessComponent;

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
        this.loadingService.presentLoadingSpinner('Création de ton compte en cours...', 5000);
        this.registerNeighborUser();
      } catch (error) {
        console.error('Error during neighbor registration:', error);
      }
    }
  }

  cancel() {
    return this.registrationModalCtrl.dismiss(null, 'cancel');
  }

  registerNeighborUser() {
    // call register service
    setTimeout(async () => {
      this.registrationNav.push(this.registrationSuccessComponent);
      console.log('Neighbor Registration Data:', this.registrationForm.value);
    }, 5000);
  }
}
