import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  swiperModules=[IonicSlides];

  constructor() { }

  ngOnInit() {
  }

}
