import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-third-section',
  templateUrl: './third-section.component.html',
  styleUrls: ['./third-section.component.scss'],
  animations: [
    trigger('myInsertTrigger', [
      transition('void => *', [
        animate('fadeInOut 1s ease-in-out linear')
      ])
    ])
  ]
})
export class ThirdSectionComponent implements OnInit {

  constructor() {
    AOS.init();
  }

  ngOnInit(): void {
  }

}