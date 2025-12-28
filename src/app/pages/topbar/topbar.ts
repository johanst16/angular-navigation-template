import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-topbar',
  imports: [MatToolbarModule, MatIconModule, MatMenuModule,
            MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './topbar.html',
  styleUrl: './topbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}
  ]
})
export class Topbar {

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
