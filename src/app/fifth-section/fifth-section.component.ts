import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-fifth-section',
  templateUrl: './fifth-section.component.html',
  styleUrls: ['./fifth-section.component.scss']
})
export class FifthSectionComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document: Document) { }

  @ViewChild('allReferences') allReferences!: Document;
  @ViewChild('rightReferences') rightReferences!: ElementRef;

  allProjects = [
    {
      'img': 'epl2.png',
      'title': 'El Pollo Loco',
      'text': 'I worked on my JavaScript skills already for a while, when i started with this funny jump&run game. It is build with object-orientated Vanilla JS and is available both on the smartphone as well as in the browser. The goal is to kill the endboss at the end of the level and to collect as many coins as possible.',
      'href': 'https://maximilian-tauber.developerakademie.net/el%20pollo%20loco/index.html',
      'type': 'JavaScript',
      'btn': true
    },
    {
      'img': 'join2.png',
      'title': 'Join',
      'text': 'This is the first project i used a small PHP-based backend for and it is able to save all the required data on an FTP-server. This kanban-based productivity tool with an integrated login function is build with Vanilla JS and is available both on the smartphone as well as in the browser.',
      'href': 'https://gruppe-271.developerakademie.net/Join/login.html',
      'type': 'JavaScript',
      'btn': true
    }, {
      'img': 'ringoffire2.png',
      'title': 'Ring of Fire',
      'text': 'This was my first project for which i used a smaller online database, in this case it was the firebase database from Google. I coded this popular drinking game with Angular 14.2 and the goal is to use up all the 54 cards. The experience from working with firebase here was very helpful later at the CRM.',
      'href': 'https://maximilian-tauber.developerakademie.net/ring-of-fire',
      'type': 'Angular',
      'btn': true
    },
    {
      'img': 'portfolio.png',
      'title': 'Portfolio',
      'text': 'This was my first angular project at the Developer Akademie. I worked with a FTP server, Material Design and Bootstrap to create this responsive portfolio website. I worked here with many different components and the experience i got from object orientated JavaScript helped me very much.',
      'href': '',
      'type': 'Angular',
      'btn': false
    }, {
      'img': 'dogschoolcrm2.png',
      'title': 'CRM (coming soon)',
      'text': 'After completing Ring of Fire mentioned above i continued with strengthening my Angular skills and ended up coding this small CRM system with the goal to build the main function of adding clients to the system.',
      'href': '',
      'type': 'Angular',
      'btn': false
    }, {
      'img': 'slack2.png',
      'title': 'Slack clone (coming soon)',
      'text': 'This was my last project at the Developer Akademie and also my most challenging. I worked with three other fellow trainees of the Developer Akademie on this clone of the popular communication app for big organizations and its based on Angular, Material Design and Firebase.',
      'href': '',
      'type': 'Angular',
      'btn': false
    }
  ];

  allJavaScriptProjects = [
    {
      'img': 'epl2.png',
      'title': 'El Pollo Loco',
      'text': 'I worked on my JavaScript skills already for a while, when i started with this funny jump&run game. It is build with object-orientated Vanilla JS and is available both on the smartphone as well as in the browser. The goal is to kill the endboss at the end of the level and to collect as many coins as possible.',
      'href': 'https://maximilian-tauber.developerakademie.net/el%20pollo%20loco/index.html',
      'type': 'JavaScript'
    },
    {
      'img': 'join2.png',
      'title': 'Join',
      'text': 'This is the first project i used a small PHP-based backend for and it is able to save all the required data on an FTP-server. This kanban-based productivity tool with an integrated login function is build with Vanilla JS and is available both on the smartphone as well as in the browser.',
      'href': 'https://gruppe-271.developerakademie.net/Join/login.html',
      'type': 'JavaScript'
    }
  ];

  allAngularProjects = [
    {
      'img': 'ringoffire2.png',
      'title': 'Ring of Fire',
      'text': 'This was my first project for which i used a smaller online database, in this case it was the firebase database from Google. I coded this popular drinking game with Angular 14.2 and the goal is to use up all the 54 cards. The experience from working with firebase here was very helpful later at the CRM.',
      'href': 'https://maximilian-tauber.developerakademie.net/ring-of-fire',
      'type': 'Angular',
      'btn': true
    },
    {
      'img': 'portfolio.png',
      'title': 'Portfolio',
      'text': 'This was my first angular project at the Developer Akademie. I worked with a FTP server, Material Design and Bootstrap to create this responsive portfolio website.',
      'href': '',
      'type': 'Angular'
    },
    {
      'img': 'dogschoolcrm2.png',
      'title': 'CRM (coming soon)',
      'text': 'After completing Ring of Fire mentioned above i continued with strengthening my Angular skills and ended up coding this small CRM system with the goal to build the main function of adding clients to the system.',
      'href': '',
      'type': 'Angular'
    }, {
      'img': 'slack2.png',
      'title': 'Slack clone (coming soon)',
      'text': 'This was my last project at the Developer Akademie and also my most challenging. I worked with three other fellow trainees of the Developer Akademie on this clone of the popular communication app for big organizations and its based on Angular, Material Design and Firebase.',
      'href': '',
      'type': 'Angular'
    }
  ];

  ngOnInit(): void {
    this.openProjects('all');
  }

  type: string;

  openProjects(type: string) {
    this.type = type;
    if (this.type == 'all') {
      document.getElementById('js-references').classList.add('d-none');
      document.getElementById('angular-references').classList.add('d-none');
      document.getElementById('all-references').classList.remove('d-none');
    } else if (this.type == 'JavaScript') {
      document.getElementById('js-references').classList.remove('d-none');
      document.getElementById('angular-references').classList.add('d-none');
      document.getElementById('all-references').classList.add('d-none');
    } else if (this.type == 'Angular') {
      document.getElementById('js-references').classList.add('d-none');
      document.getElementById('angular-references').classList.remove('d-none');
      document.getElementById('all-references').classList.add('d-none');
    }
  }

}

