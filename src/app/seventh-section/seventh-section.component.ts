import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-seventh-section',
  templateUrl: './seventh-section.component.html',
  styleUrls: ['./seventh-section.component.scss']
})
export class SeventhSectionComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;

  ngOnInit(): void {

  }

  sendMail() {
    //action="https://maximilian-tauber.developerakademie.net/send_mail/send_mail.php"
    console.log('sending mail!', this.myForm);
  }
}
