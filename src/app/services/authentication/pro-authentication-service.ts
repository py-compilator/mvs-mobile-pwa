import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProAuthenticationService {

  async signProEmailAndPassword() {
    console.log('Pro user service signed in !');
  }
}
