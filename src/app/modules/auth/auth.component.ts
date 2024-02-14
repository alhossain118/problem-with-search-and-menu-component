import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  standalone: true,
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  today: Date = new Date();

  constructor() {
    console.log('auth component');
  }

  ngOnInit(): void {
    // document.body.classList.add('bg-white');
  }

  ngOnDestroy() {
    // document.body.classList.remove('bg-white');
  }
}
