import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  projects = [
    {
      name: '80s Trivia',
      img: 'http://www.seekgif.com/uploads/80s-stock-footage-background-clipart-19.jpeg',
      link: 'https://cdaltonparsons.github.io/trivia-game/',
      gitSrc: 'https://github.com/cdaltonparsons/trivia-game',
      description:
        'This is a very basic trivia game.  It showcases bases form concepts, and is built using simple html, css and javascript',
    },
    {
      name: 'Pupper',
      img: 'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg',
      link: 'https://project2-pupper.herokuapp.com/',
      gitSrc: 'https://github.com/cdaltonparsons/pupper',
      description:
        'This is project is a simple social media app.  The idea is that it allows you to connect to other dog owners.  It was built using just html, css and javascript.  I also refactored this app to use React, but it is no longer hosted.',
    },
    {
      name: 'Google eBooks',
      img: 'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1554919465/shape/mentalfloss/istock-157382617.jpg',
      link: 'https://ancient-caverns-59473.herokuapp.com',
      gitSrc: 'https://github.com/cdaltonparsons/googleBooks',
      description: 'This is a very simple app that I built using react.  It allows the user to make requests to the google books api, and returns some basic information.'
    },
  ];

  constructor() {}
}
