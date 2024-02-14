import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { SearchResultInnerService } from './search-result-inner.service';
import { Router } from '@angular/router';
import { CustomSearchBox } from './custom-search-box/custom-search-box.component';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CustomSearchBox, CommonModule],
  selector: 'app-search-result-inner',
  templateUrl: './search-result-inner.component.html',
  styleUrls: ['./search-result-inner.component.scss'],
})
export class SearchResultInnerComponent implements OnInit {
  constructor(
    public searchResultInnerService: SearchResultInnerService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {}

  public results: any[] = [];

  @HostBinding('class') get class() {
    return this.searchBar ? 'menu menu-sub menu-sub-dropdown p-7 w-325px' : '';
  }

  @HostBinding('attr.data-kt-menu') dataKtMenu = 'true';
  @HostBinding('attr.data-kt-search-element') dataKtSearch = 'content';

  @Input() public searchBar = false;
  @Output() public searchResultClicked = new EventEmitter();

  public blockchains: any[] = [];
  public showChains = false;
  public selectedSettingsIndex = 0;
  public currentChain = 'eth';
  public text: string = '';

  public ngOnInit(): void {
    this.blockchains = this.searchResultInnerService.blockchains;
    this.cd.detectChanges();
  }

  public settingsClicked() {
    this.showChains = !this.showChains;
  }

  public routeToPage(item: any): void {
    this.searchResultClicked.emit(item);
  }

  public chainSelected(chain: any, index: number) {
    if (!chain.selected) {
      chain.selected = true;
      this.blockchains[this.selectedSettingsIndex].selected = false;
      this.selectedSettingsIndex = index;
      this.searchResultInnerService.setCurrentChain(index);
      this.currentChain = this.searchResultInnerService.getCurrentChain();
    }
  }

  public searchText(text: any) {
    this.results = text;
  }

  public routeToAddressPage(address: string) {
    this.router.navigate(['/address', address]);
  }
}
