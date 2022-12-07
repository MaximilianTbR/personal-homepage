import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-reference',
  templateUrl: './single-reference.component.html',
  styleUrls: ['./single-reference.component.scss']
})
export class SingleReferenceComponent implements OnInit {

  @Input() img: any;
  @Input() title: any;
  @Input() text: any;
  @Input() btn: any;
  @Input() href: any;

  constructor() { }

  ngOnInit(): void {
  }

}
