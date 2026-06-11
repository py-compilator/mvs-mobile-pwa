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
  IonInput,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonNote,
  IonSelect,
  IonSelectOption,
  IonIcon,
  IonInputPasswordToggle,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  arrowForwardOutline,
  businessOutline,
  locationOutline,
  lockClosedOutline,
  mailOutline,
  mapOutline,
  personOutline,
  planetOutline,
  briefcaseOutline,
  bookmarkOutline,
} from 'ionicons/icons';

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
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProRegistrationFormComponent {
  private formBuilder = inject(FormBuilder);

  step = signal(1);

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

  activityTypes = [
    { value: 'bar', label: 'Bar' },
    { value: 'karaoke', label: 'Karaoke' },
    { value: 'restaurant', label: 'Restaurant' },
    { value: 'bar-restaurant', label: 'Bar-Restaurant' },
    { value: 'cinéma', label: 'Cinéma' },
    { value: 'théatre', label: 'Théatre' },
  ];

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

  private passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  nextStep() {
    this.step.set(2);
  }

  previousStep() {
    this.step.set(1);
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
    }
  }
}
