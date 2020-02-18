import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
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
    private router: Router,
    private toastController: ToastController
  ) { }

  async loginUser() {
    try {
      this.authService.loginUser({ email: this.user.email, password: this.user.password });
      this.router.navigate(['home']);
    } catch (e) {
      const toast = await this.toastController.create({
        message: e.message,
        duration: 2000
      });
      toast.present();
      console.warn(e);
    }

  }

  async registerUser() {
    try {
      this.authService.registerUser({ email: this.user.email, password: this.user.password });
      this.router.navigate(['home']);
    } catch (e) {
      const toast = await this.toastController.create({
        message: e.message,
        duration: 2000
      });
      toast.present();
      console.warn(e);
    }
  }

  ngOnInit() {
  }

}
