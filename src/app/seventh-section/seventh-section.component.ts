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
    let nameField = this.nameField.nativeElement;
    let emailField = this.mailField.nativeElement;
    let messageField = this.messageField.nativeElement;
    console.log('message sent!')
    nameField.disabled = true;
    emailField.disabled = true;
    messageField.disabled = true;
    // Animation
    let fd = new FormData();
    fd.append('name', nameField.value);
    fd.append('email', emailField.value);
    fd.append('message', messageField.value);
    await fetch('https://maximiliantauber.com/api/send_mail.php', {
      method: 'POST',
      body: fd
    });
    // show text: message sent!
    console.log('message sent!')
    nameField.disabled = false;
    emailField.disabled = false;
    messageField.disabled = false;
  }

  failedTestValidation() {
    if (this.nameField.nativeElement.value >= 1) {
      // mail code 
    } else {
      this.nameFieldValidation();
      this.mailFieldValidation();
      this.textFieldValidation();
    }
  }

  nameFieldValidation() {
    if (this.nameField.nativeElement.value == 0) {
      console.log('namefIeld is missing');
    }
  }

  mailFieldValidation() {
    if (this.mailField.nativeElement.value == 0) {
      console.log('Mailfield is missing');
    }
  }

  textFieldValidation() {
    if (this.messageField.nativeElement.value == 0) {
      console.log('textfield is missing');
    }
  }
}
