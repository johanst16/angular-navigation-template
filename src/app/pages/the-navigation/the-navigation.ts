import { Component } from '@angular/core';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink, RouterOutlet, RouterLinkActive } from "@angular/router";
import { MatFormField } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-the-navigation',
  imports: [MatSidenavModule, MatListModule,
            MatIconModule, RouterOutlet,
            RouterLink, RouterLinkActive, MatFormField,
            MatFormFieldModule, FormsModule,
          MatInputModule],
  templateUrl: './the-navigation.html',
  styleUrl: './the-navigation.css',
})
export class TheNavigation {
  filterName: string | undefined;

  constructor(private router: Router) {
    console.log('Topbar()...');
  }

  public search() {
    console.log('Searching for:', this.filterName);
    this.router.navigate(['/some-tabs', this.filterName]);
    this.filterName = "";
  }
}
