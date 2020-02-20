import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireauth: AngularFireAuth
  ) { }

  // Generelt i denne klassen er det en service klasse som kobler opp login skjermen med selve firebase auth service. 
  async loginUser({ email, password }) 
  {
    return await this.fireauth.auth.signInWithEmailAndPassword(email, password);
  }

  async registerUser({ email, password }) 
  {
    return await this.fireauth.auth.createUserWithEmailAndPassword(email, password);
  }

  async logoutUser() { }
}