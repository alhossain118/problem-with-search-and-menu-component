import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomSearchService } from './custom-search-box.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  selector: 'app-custom-search-box',
  templateUrl: 'custom-search-box.component.html',
  styleUrls: ['custom-search-box.component.scss'],
})
export class CustomSearchBox {
  @Input() public searchBar = false;
  @Output() public showSettings: EventEmitter<any> = new EventEmitter<any>();
  @Output() public searchText: EventEmitter<any> = new EventEmitter<any>();

  public form: FormGroup | any;
  public results: any;

  constructor(private searchApi: CustomSearchService) {
    // super('SearchBox');
  }

  public ngOnInit(): void {
    // super.ngOnInit();
    this.createForm();
  }

  public createForm(): void {
    this.form = new FormGroup({
      search: new FormControl(''),
    });
  }

  public showChains(): void {
    this.showSettings.emit(null);
  }

  public searchValue(text: string): void {
    // Could this cause memory leaks?
    this.searchApi.searchAutoComplete(text).subscribe((results: any) => {
      if (this.areArraysNotEqual(results, this.results)) {
        this.searchText.emit(results);
      }
      this.results = results;
    });
  }

  public areArraysNotEqual(arr1: any, arr2: any) {
    return JSON.stringify(arr1) !== JSON.stringify(arr2);
  }
}
