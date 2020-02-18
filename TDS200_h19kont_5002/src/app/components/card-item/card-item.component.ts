import { Component, OnInit, Input } from '@angular/core';
import Campsmodel from 'src/app/Models/Campsmodel';

@Component({
  selector: 'app-cardItem',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class cardItemComponent implements OnInit {

  @Input() postData: Campsmodel;
  @Input() showUser: boolean;
  @Input() description: Campsmodel
  @Input() position: Campsmodel

  constructor() { }

  ngOnInit() {}

}
