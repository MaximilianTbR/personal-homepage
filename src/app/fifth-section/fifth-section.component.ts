import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-fifth-section',
  templateUrl: './fifth-section.component.html',
  styleUrls: ['./fifth-section.component.scss']
})
export class FifthSectionComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document: Document) { }

  @ViewChild('allReferences') allReferences!: ElementRef;
  @ViewChild('rightReferences') rightReferences!: ElementRef;

  allProjects = [
    {
      'img': 'sharkie.png',
      'title': 'El Pollo Loco',
      'text': 'I worked on my JavaScript skills already for a while, when i started with this funny jump&run game. It is build with object-orientated Vanilla JS and is available both on the smartphone as well as in the browser. The goal is to kill the endboss at the end of the level.',
      'href': '',
      'type': 'JavaScript'
    },
    {
      'img': 'join.png',
      'title': 'Join',
      'text': 'This is the first project i used a small PHP-based backend for and it is able to save all the required data on an FTP-server. This kanban-based productivity tool is build with Vanilla JS and is available both on the smartphone as well as in the browser.',
      'href': '',
      'type': 'JavaScript'
    }, {
      'img': 'ringoffire.png',
      'title': 'Ring of Fire',
      'text': 'This was my first project for which i used a smaller database, in this case it was the firebase database from Google. I coded this popular drinking game with Angular 14.2 and . The goal is to kill the endboss at the end of the level.',
      'href': '',
      'type': 'Angular'
    }, {
      'img': 'dogschoolcrm.png',
      'title': 'CRM (coming soon)',
      'text': 'After completing Ring of Fire mentioned above i continued with strengthening my Angular skills and ended up coding this small CRM system with the goal to build the main function of adding clients to the system.',
      'href': '',
      'type': 'Angular'
    }, {
      'img': 'slack.png',
      'title': 'Slack clone (coming soon)',
      'text': 'This was my last project at the Developer Akademie and also my most challenging. I worked with three other fellow trainees of the Developer Akademie on this clone of the popular communication app for big organizations and its based on Angular, Material Design and Firebase.',
      'href': '',
      'type': 'Angular'
    }
  ];

  ngOnInit(): void {
    this.openProjects('all');
  }

  openProjects(type: string) {
    if (type == 'all') {
      this.allReferences.nativeElement += `
        <div class="single-reference">
            <div class="img-div">
                <img src="./../../assets/img/sharkie.png">
            </div>
            <div class="text-div">
                <h3>El Pollo Loco</h3>
                <div class="simple-text">
                    I worked on my JavaScript skills already for a while, when i started with this funny jump&run game. It is build with object-orientated Vanilla JS and is available both on the smartphone as well as in the browser. The goal is to kill the endboss at the
                    end of the level.
                </div>
                <div class="href-btn">
                    <img src="./../../assets/img/8.png">
                </div>
            </div>
        </div>
        `;
      document.getElementById('all-references').innerHTML = `Hallo Welt`;
    } else if (type == 'JavaScript') {
      console.log('Javascript')
    } else if (type == 'Angular') {
      console.log('angular');
    }
  }

}

