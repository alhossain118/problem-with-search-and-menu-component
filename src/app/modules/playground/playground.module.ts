import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineSVGModule } from 'ng-inline-svg';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PlaygroundComponent } from './playground.component';
import { ChatInnerModule } from 'src/app/_metronic/partials/content/chat-inner/chat-inner.module';
import { NgApexchartsModule } from 'ng-apexcharts';
@NgModule({
  declarations: [PlaygroundComponent],
  providers: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InlineSVGModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PlaygroundComponent,
      },
    ]),
    ChatInnerModule,
    NgApexchartsModule
    
  ],
})
export class PlaygroundModule { }
