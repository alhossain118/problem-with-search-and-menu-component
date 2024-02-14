import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../src/environments/environment';
@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss'],
})
export class ErrorsComponent implements OnInit {
  @HostBinding('class') class = 'd-flex flex-column flex-root';
  constructor(private router: Router) {}

  public environment = environment;

  ngOnInit(): void {}

  routeToDashboard() {
    this.router.navigate(['/']);
    // setTimeout(() => {
    //   ToggleComponent.bootstrap();
    //   ScrollTopComponent.bootstrap();
    //   DrawerComponent.bootstrap();
    //   StickyComponent.bootstrap();
    //   MenuComponent.bootstrap();
    //   ScrollComponent.bootstrap();
    // }, 11200);
  }
}
