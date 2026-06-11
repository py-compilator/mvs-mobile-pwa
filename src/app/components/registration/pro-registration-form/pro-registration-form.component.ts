import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonInputPasswordToggle,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonNav,
  IonNote,
  IonSelect,
  IonSelectOption,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  arrowForwardOutline,
  bookmarkOutline,
  briefcaseOutline,
  businessOutline,
  locationOutline,
  lockClosedOutline,
  mailOutline,
  mapOutline,
  personOutline,
  planetOutline,
} from 'ionicons/icons';
import { CancelUserRegistrationAlert } from '../../../pages/registration/cancel-user-registration-alert/cancel-user-registration-alert';
import { DEFAULT_ION_LOADING_DURATION } from '../../../interfaces/global-constants';
import { MvsIonicLoadingService } from '../../../services/ionic/mvs-ionic-loading.service';
import {
  UserRegistrationSuccessComponent
} from '../../../pages/registration/user-registration-success/user-registration-success.component';

@Component({
  selector: 'app-pro-registration-form',
  templateUrl: './pro-registration-form.component.html',
  styleUrls: ['./pro-registration-form.component.scss'],
  imports: [
    ReactiveFormsModule,
    IonItem,
    IonLabel,
    IonInput,
    IonItemDivider,
    IonSelect,
    IonSelectOption,
    IonNote,
    IonButton,
    IonIcon,
    IonInputPasswordToggle,
    IonButtons,
    IonHeader,
    IonToolbar,
    IonContent,
    CancelUserRegistrationAlert,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProRegistrationFormComponent {
  private registrationNavCtx = inject(IonNav);
  private registrationSuccessComponent = UserRegistrationSuccessComponent;

  private mvsIonLoadingService = inject(MvsIonicLoadingService);

  formRegistrationStep = signal(1);

  activityTypes = [
    { value: 'bar', label: 'Bar' },
    { value: 'karaoke', label: 'Karaoke' },
    { value: 'restaurant', label: 'Restaurant' },
    { value: 'bar-restaurant', label: 'Bar-Restaurant' },
    { value: 'cinéma', label: 'Cinéma' },
    { value: 'théatre', label: 'Théatre' },
  ];
  private formBuilder = inject(FormBuilder);

  registrationForm = this.formBuilder.group({
    eventHost: this.formBuilder.group({
      label: ['', [Validators.required]],
      activityType: ['', [Validators.required]],
      street: ['', [Validators.required]],
      city: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      country: ['Suisse', [Validators.required]],
    }),
    owner: this.formBuilder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validators: this.passwordMatchValidator,
      },
    ),
  });

  constructor() {
    addIcons({
      arrowBackOutline,
      arrowForwardOutline,
      personOutline,
      mailOutline,
      lockClosedOutline,
      briefcaseOutline,
      locationOutline,
      mapOutline,
      businessOutline,
      planetOutline,
      bookmarkOutline,
    });
  }

  nextStep() {
    this.formRegistrationStep.set(2);
  }

  previousStep() {
    this.formRegistrationStep.set(1);
  }

  onSubmit() {
    if (!this.registrationForm.valid) {
      try {
        this.mvsIonLoadingService.presentIonicLoadingSpinner(
          'Ouverture de ton compte en cours...',
          DEFAULT_ION_LOADING_DURATION,
        );
        this.registerMvsNeighbor();
      } catch (error) {
        console.error('Error during neighbor registration:', error);
      }
    }
  }

  registerMvsNeighbor() {
    // call register service
    setTimeout(async () => {
      this.registrationNavCtx.push(this.registrationSuccessComponent);
      console.log('Pro Registration Data:', this.registrationForm.value);
    }, DEFAULT_ION_LOADING_DURATION);
  }

  private passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }
}
