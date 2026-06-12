import { inject, Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider, signInWithPopup, signOut, user } from '@angular/fire/auth';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class NeighborAuthenticationService {

  private readonly _firebaseAuthService = inject(Auth);

  readonly user$ = user(this._firebaseAuthService);
  readonly user = toSignal(this.user$);

  async signInWithGoogle() {
    const googleAuthProvider = new GoogleAuthProvider();
    const result = await signInWithPopup(this._firebaseAuthService, googleAuthProvider);
    console.log(result.user);
  }

  async signOut() {
    await signOut(this._firebaseAuthService);
  }
}
