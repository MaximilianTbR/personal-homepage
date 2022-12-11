import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
//import AOS from 'aos';
//import 'aos/dist/aos.css'; // You can also use <link> for styles
import * as Aos from 'aos';


@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.scss'],
  animations: [
  ]
})
export class ThirdSectionComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    Aos.init();
  }

}