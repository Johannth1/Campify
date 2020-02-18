import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireauth: AngularFireAuth
  ) { }

  async loginUser({ email, password }) {
    return await this.fireauth.auth.signInWithEmailAndPassword(email, password);
  }

  async registerUser({ email, password }) {
    return await this.fireauth.auth.createUserWithEmailAndPassword(email, password);
  }

  async logoutUser() { }
}