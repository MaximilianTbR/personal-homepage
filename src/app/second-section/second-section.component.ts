import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-second-section',
  templateUrl: './second-section.component.html',
  styleUrls: ['./second-section.component.scss']
})
export class SecondSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init();
  }

}
