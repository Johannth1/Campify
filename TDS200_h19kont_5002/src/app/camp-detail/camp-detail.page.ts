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

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        // Vi lagrer dataen vi får med navigasjonen inn i this.post for å kunne vise binde dataen i HTML-fila
        this.post = this.router.getCurrentNavigation().extras.state.post as Campsmodel;
      }
    });
  }

  ngOnInit() {
  }

}
