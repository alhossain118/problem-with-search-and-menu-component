import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInnerComponent } from '../../../../_metronic/partials/layout/extras/dropdown-inner/user-inner/user-inner.component';
import { SearchResultInnerComponent } from '../../../../_metronic/partials/layout/extras/dropdown-inner/search-result-inner/search-result-inner.component';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule, UserInnerComponent, SearchResultInnerComponent],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  constructor(private router: Router){}
  title = 'morejpegs';

  toolbarButtonMarginClass = 'ms-lg-1';
  toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px';
  toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px';
  toolbarButtonIconSizeClass = 'svg-icon-1';
  headerLeft: string = 'menu';

  loggedIn = true;
  user: any;
  userDetails: any;
  imageError: any;
  loginInfo: any;

  public routeToLogin() {
    this.router.navigate(['/auth']);
  }

  public searchResultClicked() {}
}
