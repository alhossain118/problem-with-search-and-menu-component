import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { LayoutService } from './core/layout.service';
import { LayoutInitService } from './core/layout-init.service';
import { AuthService } from 'src/app/services/auth.service';
import { SPINNER_GIPHY } from 'src/app/constants/spinner.constant';
import {
  EmailValidator,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FireBaseService } from 'src/app/shared/services/firebase.service';
import { map, take } from 'rxjs/operators';
import { environment } from '../../../../src/environments/environment'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, AfterViewInit {
  // Public variables
  selfLayout = 'default';
  asideSelfDisplay: true;
  asideMenuStatic: true;
  contentClasses = '';
  contentContainerClasses = '';
  toolbarDisplay = true;
  contentExtended: false;
  asideCSSClasses: string;
  asideHTMLAttributes: any = {};
  headerMobileClasses = '';
  headerMobileAttributes = {};
  footerDisplay: boolean;
  footerCSSClasses: string;
  headerCSSClasses: string;
  headerHTMLAttributes: any = {};
  // offcanvases
  extrasSearchOffcanvasDisplay = false;
  extrasNotificationsOffcanvasDisplay = false;
  extrasQuickActionsOffcanvasDisplay = false;
  extrasCartOffcanvasDisplay = false;
  extrasUserOffcanvasDisplay = false;
  extrasQuickPanelDisplay = false;
  extrasScrollTopDisplay = false;
  asideDisplay: boolean;
  @ViewChild('ktAside', { static: true }) ktAside: ElementRef;
  @ViewChild('ktHeaderMobile', { static: true }) ktHeaderMobile: ElementRef;
  @ViewChild('ktHeader', { static: true }) ktHeader: ElementRef;

  constructor(
    private initService: LayoutInitService,
    private layout: LayoutService,
    private auth: AuthService,
    private cd: ChangeDetectorRef,
    private fbService: FireBaseService
  ) {
    this.initService.init();
  }

  public showContent = true;
  public subscribed = false;
  public user: any;
  public template = SPINNER_GIPHY;
  public environment = environment;
  public form: FormGroup;

  ngOnInit(): void {
    // build view by layout config settings
    this.asideDisplay = this.layout.getProp('aside.display') as boolean;
    this.toolbarDisplay = this.layout.getProp('toolbar.display') as boolean;
    this.contentContainerClasses =
      this.layout.getStringCSSClasses('contentContainer');
    this.asideCSSClasses = this.layout.getStringCSSClasses('aside');
    this.headerCSSClasses = this.layout.getStringCSSClasses('header');
    this.headerHTMLAttributes = this.layout.getHTMLAttributes('headerMenu');
    this.createForm();
  }

  ngAfterViewInit(): void {
    if (this.ktHeader) {
      for (const key in this.headerHTMLAttributes) {
        if (this.headerHTMLAttributes.hasOwnProperty(key)) {
          this.ktHeader.nativeElement.attributes[key] =
            this.headerHTMLAttributes[key];
        }
      }
    }
    // this.triggerAuth();
    // public showContent = false;
  }

  public triggerAuth() {
    this.auth.isLoggedIn$.subscribe(() => {
      this.user = this.auth.user$.value;
      if (
        this.auth.isLoggedIn$.value ||
        this.auth.isLoggedIn$.value === false
      ) {
        const allowList = [
          //dev
          'C3YyXDHQoyb5Tz11lcEh7taEWci2',
          //prod
          '9nNqxLmTIWgVesoHKFDrmHwka952',
        ];
        if (allowList.includes(this.user.uid)) {
          this.showContent = true;
          this.cd.detectChanges();
        }
      }
    });
  }

  public createForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        // Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        Validators.email
      ]),
    });
  }

  subscribe() {
    console.log("valid", this.form.controls)
    if (this.form.valid) {
      const email = this.form.get('email')?.value;

      this.fbService
        .docExists('subscribers', 'email', email)
        .pipe(
          map((res) => {
            console.log('res', res);
            if (res) {
              console.log('exists');
            } else {
              console.log('doesnt exist');
              this.fbService.addDocToCollection('Subscribers', { email });
              this.subscribed = true;
              this.cd.detectChanges();
            }
          }),
          take(1)
        )
        .subscribe();
    }
  }
}
