import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-example-form',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatIconModule, MatInputModule,
          MatButtonModule, MatButtonToggleModule, MatRadioModule],
  templateUrl: './example-form.html',
  styleUrl: './example-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleForm {
  profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      fontStyle: new FormControl(''),
      options: new FormControl(''),
    });

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
