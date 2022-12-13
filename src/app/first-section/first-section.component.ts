import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-first-section',
  templateUrl: './first-section.component.html',
  styleUrls: ['./first-section.component.scss']
})
export class FirstSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
  }

}
