import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireauth: AngularFireAuth
  ) { }

  async loginUser({ username, password }) {
    return await this.fireauth.auth.signInWithEmailAndPassword(username, password);
  }

  async registerUser({ username, password }) {
    return await this.fireauth.auth.createUserWithEmailAndPassword(username, password);
  }

  async logoutUser() { }
}

