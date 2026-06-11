import { inject, Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class UserAuthenticationService {

  private readonly _firebaseAuthService = inject(Auth);

  async signInWithGoogle() {
    const googleAuthProvider = new GoogleAuthProvider();
    const result = await signInWithPopup(this._firebaseAuthService, googleAuthProvider);
    console.log(result.user);
  }
}
