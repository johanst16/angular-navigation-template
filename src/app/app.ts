import { Component, signal } from '@angular/core';
import { Topbar } from "./pages/topbar/topbar";
import { TheNavigation } from "./pages/the-navigation/the-navigation";

@Component({
  selector: 'app-root',
  imports: [Topbar, TheNavigation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-navigation-template');
}
