import { Component } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maximiliantauber.com';


  constructor() { }

  ngOnInit(): void {
    Aos.init();
    Aos.refresh();
  }
}
