import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ConfirmPasswordValidator } from './confirm-password.validator';
// import { AuthService } from '../../../../services/auth.service';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup| any;
  hasError = false;
  isLoading$: Observable<boolean> | any;

  // private fields

  constructor(
    private fb: FormBuilder,
    // private authService: AuthService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    // this.isLoading$ = this.authService.isLoading$;
    // redirect to home if already logged in
    // if (this.authService.user$.value) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    // this.initForm();
  }

  // initForm() {
  //   this.registrationForm = this.fb.group(
  //     {
  //       email: [
  //         null,
  //         Validators.compose([
  //           Validators.required,
  //           Validators.email,
  //           Validators.minLength(3),
  //           Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
  //         ]),
  //       ],
  //       password: [
  //         '',
  //         Validators.compose([
  //           Validators.required,
  //           Validators.minLength(6),
  //           Validators.maxLength(100),
  //         ]),
  //       ],
  //       cPassword: [
  //         '',
  //         Validators.compose([
  //           Validators.required,
  //           Validators.minLength(6),
  //           Validators.maxLength(100),
  //         ]),
  //       ],
  //     },
  //     {
  //       validator: ConfirmPasswordValidator.MatchPassword,
  //     }
  //   );
  // }

  // loginWithGoogle() {
  //   this.authService.loginWithGoogle().then(() => this.router.navigate(['/']));
  // }

  // submit() {
  //   const email = this.registrationForm.get('email')?.value;
  //   const password = this.registrationForm.get('password')?.value;

  //   this.authService
  //     .signUpWithUserAndPassWord(email, password)
  //     .then((res) => (res ? this.router.navigate(['/']) : null))
  //     .catch(() => {
  //       this.hasError = true;
  //       this.cd.detectChanges();
  //     });
  // }
}
