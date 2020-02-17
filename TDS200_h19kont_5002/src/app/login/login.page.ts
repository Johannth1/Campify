import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { async } from '@angular/core/testing';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  public user = { username: "", password: "" };

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastController: ToastController
  ) { }

  async loginUser() {
    try {
      this.authService.loginUser({ username: this.user.username, password: this.user.password });
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
      this.authService.registerUser({ username: this.user.username, password: this.user.password });
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
