import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InlineSVGModule } from 'ng-inline-svg';
import { RouterModule } from '@angular/router';
import { SearchResultInnerComponent } from './search-result-inner.component';
import { CustomSearchBox } from './custom-search-box/custom-search-box.component';
import { SearchResultInnerService } from './search-result-inner.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomSearchService } from './custom-search-box/custom-search-box.service';

const COMPONENTS = [SearchResultInnerComponent, CustomSearchBox] as any[];

const DIRECTIVES = [] as any[];

@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  providers: [SearchResultInnerService, CustomSearchService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    InlineSVGModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [...COMPONENTS, ...DIRECTIVES],
})
export class SearchResultModule {}
