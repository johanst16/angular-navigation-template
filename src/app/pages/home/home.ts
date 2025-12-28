import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  welcomeMessage = 'Welcome to the Home Page';

  constructor() {
    console.log('Home component initialized');
  }
}
