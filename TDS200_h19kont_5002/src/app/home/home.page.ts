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
    // kobler oss på firebase collection vi har laget calt Camps, og tar i bruk observables så hører om det har skjedd noen forandreringer. 
    this.posts$ = this.firestore.collection("Camps").valueChanges() as Observable<Campsmodel[]>;
  }

  // Her har vi et async funksjon som logger ut brukeren ved å trykke på iconet inne i HTML filen, 
  // Den tar i bruk firebase sin auth for å logge oss ut, og router oss tilbake til login siden. 
  async logoutUser() {
    try {
      await this.fireauth.auth.signOut();
      this.router.navigate(['/login']);
    } catch (e) {
      console.log(e);
    }
  }

  // denne router oss til camp-detail hvis vi trykket på en post
  navigateToDetailView (tappedPost: Campsmodel) {
    let navigationExtras: NavigationExtras = {
      state: {
        post: tappedPost
      }
    };
    this.router.navigate(['camp-detail'], navigationExtras);
  }

}
