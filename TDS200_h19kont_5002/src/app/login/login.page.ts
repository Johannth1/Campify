import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private user = { 
    email: "", 
    password: "" };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  // Vi bruker async for å bruke "Promises" på en tryggere måte, siden vi ikke vet når brukeren skal skrive inn e-posten og passordet. 
  // Login funksjon som tar i bruk auth.service.ts classen, som tar inn en e-post og
  // passord og sender de inn til firebase, hvis disse blir godkjent navigere den videre til home page
  async loginUser() {
    try {
      this.authService.loginUser({
          email: this.user.email,
          password: this.user.password });
        this.router.navigate(['home']);
      } catch(error) {
        console.log = error.message;
    }
  } 

  // Se kommentaren over..
  async registerUser() {
    try {
      this.authService.registerUser({ 
          email: this.user.email, 
          password: this.user.password });
        this.router.navigate(['home']);
      } catch(error) {
        console.log = error.message;
    }
  }

  ngOnInit() {
  }

}
