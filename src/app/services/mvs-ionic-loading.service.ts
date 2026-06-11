import { inject, Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular/standalone';
import { DEFAULT_ION_LOADING_MESSAGE, DEFAULT_ION_LOADING_DURATION } from '../interfaces/global-constants';

@Injectable({
  providedIn: 'root',
})
export class MvsIonicLoadingService {
  private defaultLoadingMessage: string = DEFAULT_ION_LOADING_MESSAGE;
  private defaultLoadingDuration: number = DEFAULT_ION_LOADING_DURATION;

  private loadingCtrl = inject(LoadingController);

  async presentIonicLoadingSpinner(loadingMessage?: string, duration?: number) {
    const loading = await this.loadingCtrl.create({
      message: loadingMessage ?? this.defaultLoadingMessage,
      duration: duration ?? this.defaultLoadingDuration,
      cssClass: 'custom-loading',
      showBackdrop: true,
    });

    loading.present();
  }
}
