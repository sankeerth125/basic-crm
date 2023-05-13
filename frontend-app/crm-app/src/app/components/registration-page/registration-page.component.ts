import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserServiceService } from 'src/app/services/user-service.service';
import { passwordMatchValidator } from 'src/app/validators/password-match.validator';

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
    HttpClientModule,
    MatTooltipModule,
  ],
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit {
  hidePassword = true;
  hideConfirmPassword = true;

  username = new FormControl<string>('');
  email = new FormControl<string>('', [Validators.email]);
  protected password = new FormControl<string>('', [Validators.minLength(8)]);
  protected confirmPassword = new FormControl<string>('');

  userFormGroup: FormGroup = new FormGroup(
    {
      username: this.username,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
    },
    {
      validators: passwordMatchValidator(),
    }
  );

  constructor(
    private router: Router,
    private userService: UserServiceService
  ) {}

  ngOnInit(): void {
    this.userFormGroup.valueChanges.subscribe(() => {
      console.log(this.userFormGroup.valid, this.userFormGroup.errors);
    });
  }

  protected onRegisterClick() {
    console.log('Registered!!');
    const user: User = {
      id: '',
      username: this.username.value || '',
      password: this.password.value || '',
      emailId: this.email.value || '',
    };
    this.userService.saveUser(user).subscribe((user) => {
      console.log(user);
      if (user) this.router.navigate(['/home']);
    });
  }
}
