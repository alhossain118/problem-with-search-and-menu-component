import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LayoutService } from '../../core/layout.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  toolbarButtonMarginClass = 'ms-lg-1';
  toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px';
  toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px';
  toolbarButtonIconSizeClass = 'svg-icon-1';
  headerLeft: string = 'menu';

  constructor(
    public authService: AuthService,
    private layout: LayoutService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}

  public loggedIn: boolean = false;
  public user: any; // User
  public userDetails: any;
  public loginInfo: string | any;
  public imageError = false;

  public ngOnInit(): void {
    this.headerLeft = this.layout.getProp('header.left') as string;

    this.authService.isLoggedIn$.subscribe((res) => {
      console.log("authservice subscribe")
      if (res) {
        this.user = this.authService.user$.value;
        this.userDetails = this.authService.userDetails$.value;
        this.loginInfo = this.user.email?.charAt(0).toLocaleUpperCase();
        this.loggedIn = true;
        this.cd.detectChanges();
      }
    });
  }

  public routeToLogin() {
    this.router.navigate(['/auth']);
  }

  public routeTo(link: string) {
    this.router.navigate([link]).then(() => window.scrollTo(0, 0));
  }

  public searchResultClicked(item: any): void {
    const { slug } = item;
    const url = ['collection', slug];

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(url);
    });
  }

  public authlogout() {
    this.authService.logout().then((res) => {
      this.cd.detectChanges();
    });
  }
}
