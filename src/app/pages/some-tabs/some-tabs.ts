import { AfterViewInit, Component, OnInit, Renderer2, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { MatFormField } from "@angular/material/input";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { ActivatedRoute } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';

import { Subscription  } from 'rxjs';
import { ExampleForm } from "../forms/example-form/example-form";
@Component({
  selector: 'app-some-tabs',
  imports: [MatTabsModule, MatFormField, ReactiveFormsModule,
    MatFormFieldModule, MatSelectModule,
    MatInputModule, ExampleForm],
  templateUrl: './some-tabs.html',
  styleUrl: './some-tabs.css',
})
export class SomeTabs implements OnInit, AfterViewInit {
  @ViewChild('myInput') input?: ElementRef<HTMLInputElement>;
  profileForm!: FormGroup;
  filtername: string | null = null;
  toppings = new FormControl('');
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(private fb: FormBuilder,
              private renderer: Renderer2,
              @Inject(PLATFORM_ID) private platformId: Object,
            private route: ActivatedRoute) {

      if (isPlatformBrowser(this.platformId) && this.input?.nativeElement) {
        this.input.nativeElement.focus();
      }

    this.filtername = this.route.snapshot.paramMap.get('id');
    console.log('constructor... filtername=', this.filtername)
  }

  ngOnInit() {
    console.log('SomeTabs.ngOnInit()...');
    this.profileForm = this.fb.group({
      myInput: [this.filtername]
    });

    this.route.paramMap.subscribe(params => {
      this.filtername = params.get('id');
      if(this.filtername == "0") {
        this.filtername = "";
      }
      this.profileForm.patchValue({ myInput: this.filtername });
      if (isPlatformBrowser(this.platformId) && this.input?.nativeElement) {
        this.input.nativeElement.focus();
      }
      console.log('filterName:', this.filtername);
    });
    if (isPlatformBrowser(this.platformId) && this.input?.nativeElement) {
      this.input.nativeElement.focus();
    }
  }

  ngAfterViewInit(): void {
    console.log('SomeTabs.ngAfterViewInit()...');
    setTimeout(() => {

      if (isPlatformBrowser(this.platformId) && this.input?.nativeElement) {
        this.input.nativeElement.focus();
      }

    }, 500);

  }

  focusMyInput() {
    if (isPlatformBrowser(this.platformId) && this.input?.nativeElement) {
      this.input.nativeElement.focus();
    }

  }
}
