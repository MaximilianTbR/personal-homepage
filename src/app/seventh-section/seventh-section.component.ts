import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-seventh-section',
  templateUrl: './seventh-section.component.html',
  styleUrls: ['./seventh-section.component.scss']
})
export class SeventhSectionComponent implements OnInit {
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('nameField') nameField!: ElementRef;
  @ViewChild('mailField') mailField!: ElementRef;
  @ViewChild('messageField') messageField!: ElementRef;
  @ViewChild('inputBtn') inputBtn!: ElementRef;


  ngOnInit(): void {
    Aos.init();
  }

  async sendMail() {
    console.log('sending mail!', this.myForm);
    let nameField = this.nameField.nativeElement;
    let emailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    // Animation
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);


    await fetch('https://maximilian-tauber.developerakademie.net/send_mail/send_mail.php', {
      method: 'POST',
      body: fd
    });
    // show text: message sent!
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
  }
}
