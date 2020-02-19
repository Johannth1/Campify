import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import Campsmodel from '../Models/Campsmodel';

@Component({
  selector: 'app-camp-detail',
  templateUrl: './camp-detail.page.html',
  styleUrls: ['./camp-detail.page.scss'],
})
export class CampDetailPage implements OnInit {

  private post: Campsmodel;

  // Finn ut hva i helevete denne gjør

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.post = this.router.getCurrentNavigation().extras.state.post as Campsmodel;
      }
    });
  }
  // Går tilbake med iconet, async med promise. 
  async goback() {
    this.router.navigate(['/'])
  }

  ngOnInit() {
  }

}
