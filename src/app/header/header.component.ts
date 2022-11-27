import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  BL = false;

  openMenu() {
    if (!this.BL) {
      document.getElementById('open-menu')?.classList.remove('d-none');
      this.BL = true;
    } else {
      document.getElementById('open-menu')?.classList.add('d-none');
      this.BL = false;
    }
  }

}
