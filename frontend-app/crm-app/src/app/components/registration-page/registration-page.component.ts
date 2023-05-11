import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent {
  hidePassword = true;
  hideConfirmPassword = true;

  username = new FormControl<string>('');
  email = new FormControl<string>('', [Validators.email]);
  protected password = new FormControl<string>('');
  protected confirmPassword = new FormControl<string>('');

  registeredUser: FormGroup = new FormGroup({
    username: this.username,
    email: this.email,
    password: this.password,
  });

  constructor(private router: Router) {}

  protected onRegisterClick() {
    console.log('Registered!!');
    this.router.navigate(['/home']);
  }
}
