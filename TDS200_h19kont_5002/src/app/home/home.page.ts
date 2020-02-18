import { Component, OnInit } from '@angular/core';
import Campsmodel from '../Models/Campsmodel';
import { Router, NavigationExtras } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private posts$: Observable<Campsmodel[]>;

  constructor(
    private firestore: AngularFirestore,
    private router: Router, 
    private fireauth: AngularFireAuth) {

  }

  ngOnInit() {
    // Her kobler vi oss til vår Firestore Collection kalt "posts", og lytter på endringer (valueChanges()).
    this.posts$ = this.firestore.collection("Camps").valueChanges() as Observable<Campsmodel[]>;
  }

  async logoutUser() {
    try {
      await this.fireauth.auth.signOut();
      this.router.navigate(['/login']);
    } catch (e) {
      console.log(e);
    }
  }

  navigateToDetailView (tappedPost: Campsmodel) {
    let navigationExtras: NavigationExtras = {
      state: {
        post: tappedPost
      }
    };
    this.router.navigate(['camp-detail'], navigationExtras);
  }

}
