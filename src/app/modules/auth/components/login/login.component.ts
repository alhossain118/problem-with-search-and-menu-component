import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from '../../../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  providers: [],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // KeenThemes mock, change it to:
  loginForm: FormGroup | any;
  hasError = false;
  // isLoading$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    // public authService: AuthService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    // this.isLoading$ = this.authService.isLoading$;
    // redirect to home if already logged in
  }

  ngOnInit(): void {
    // this.authService.user$.subscribe((res) => {
    //   res ? this.router.navigate(['/']) : null;
    // });

    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.minLength(6),
          Validators.maxLength(320), // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
        ]),
      ],
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(100),
        ]),
      ],
    });
  }



}
