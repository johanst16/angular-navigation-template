import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-toolbar',
  imports: [MatToolbarModule,MatFormFieldModule, MatInputModule,
    FormsModule, MatIconModule, MatMenuModule, MatButtonModule
  ],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toolbar {

  filterName: string | undefined;
  constructor(private router: Router) {
    console.log('Toolbar()...');

  }

  public search() {
    console.log('Searching for:', this.filterName);
    this.router.navigate(['/some-tabs', this.filterName]);
    this.filterName = "";
  }
}
