import { inject, Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root',
})
export class MvsIonicLoadingService {
  private defaultLoadingMessage: string = 'Loading...';
  private defaultLoadingDuration: number = 3000;

  private loadingCtrl = inject(LoadingController);

  async presentLoadingSpinner(loadingMessage?: string, duration?: number) {
    const loading = await this.loadingCtrl.create({
      message: loadingMessage ?? this.defaultLoadingMessage,
      duration: duration ?? this.defaultLoadingDuration,
      cssClass: 'custom-loading',
      showBackdrop: true
    });

    loading.present();
  }
}
